// ==========================================
// 万泓科技 — 前台网站 JS
// 从后台管理系统读取数据，admin修改后自动更新
// ==========================================

// Get data — always prefer SITE_DATA (GitHub synced), localStorage as fallback
function getData() {
  // Check if SITE_DATA has been updated (via GitHub push) more recently
  const localVersion = localStorage.getItem('wanhong_data_version');
  // Always use SITE_DATA as the primary source
  // localStorage is only used as temp cache within the same session
  var saved = localStorage.getItem('wanhong_data');
  if (saved && localVersion) {
    try { return JSON.parse(saved); } catch(e) {}
  }
  return JSON.parse(JSON.stringify(SITE_DATA));
}

// ===== RENDER ALL =====
function renderWebsite() {
  const d = getData();
  const c = d.company;
  const ct = d.contact;

  // Header
  document.getElementById('top-phone').textContent = 'Tel: ' + ct.phone2;
  document.getElementById('logo-name').textContent = c.name.length > 4 ? c.name.slice(0,4) : c.name;
  document.getElementById('hero-title').textContent = c.slogan;
  document.getElementById('hero-sub').textContent = '电子烟电芯 · CBD电池 · 圆柱型电池 · 定制PACK';

  // Hero features
  const featDiv = document.getElementById('hero-features');
  featDiv.innerHTML = (c.stats || []).map(s =>
    `<div class="hf-item"><span class="hf-icon">◆</span>${s.num} ${s.label}</div>`
  ).join('');

  // About
  document.getElementById('about-subtitle').textContent = c.slogan;
  document.getElementById('about-content').innerHTML = c.about;
  document.getElementById('about-stats').innerHTML = (c.stats || []).map(s =>
    `<div class="stat"><span class="stat-num">${s.num}</span><span class="stat-label">${s.label}</span></div>`
  ).join('');

  // Products
  renderProducts(d.products);

  // Contact
  document.getElementById('contact-info').innerHTML = `
    <h3>${c.name}</h3>
    <div class="contact-item"><span>📍</span>${ct.address}</div>
    <div class="contact-item"><span>👤</span>联系人：${ct.contactPerson}</div>
    <div class="contact-item"><span>📞</span>电话：${ct.phone1}</div>
    <div class="contact-item"><span>📧</span>邮箱：${ct.email}</div>
    <div class="contact-item highlight"><span>📞</span>${ct.phone2Label}：${ct.phone2}</div>
  `;

  // Footer
  document.getElementById('footer-name').textContent = c.name.length > 4 ? c.name.slice(0,4) : c.name;
  document.getElementById('footer-desc').textContent = c.slogan;
  document.getElementById('footer-contact').innerHTML = `
    <h4>联系方式</h4>
    <p>📞 ${ct.phone2Label}: ${ct.phone2}</p>
    <p>📞 ${ct.contactPerson}: ${ct.phone1}</p>
    <p>📧 ${ct.email}</p>
    <p>📍 ${ct.address.slice(0,10)}...</p>
  `;

  document.getElementById('logo-name').textContent = c.name;
  document.getElementById('logo-en').textContent = c.nameEn.split(' ').map(w => w[0]).join('').slice(0,12).toUpperCase();
}

function renderProducts(products) {
  const grid = document.getElementById('product-grid');
  grid.innerHTML = products.map(p => `
    <div class="product-card" data-cat="${p.category}">
      <div class="product-img"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <table class="spec-table">
          <tr><td>型号</td><td>${p.model}</td></tr>
          <tr><td>容量</td><td>${p.capacity}</td></tr>
          <tr><td>电压</td><td>${p.voltage}</td></tr>
          <tr><td>尺寸</td><td>${p.size}</td></tr>
          <tr><td>适用机型</td><td>${p.usage}</td></tr>
          <tr><td>电芯类型</td><td>${p.type}</td></tr>
        </table>
        <div class="product-actions">
          <span class="stock-badge">${p.stock ? '✦ 现货充足' : '暂时缺货'}</span>
          <a href="#contact" class="btn-inquiry">询价</a>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== TAB FILTERING =====
document.addEventListener('DOMContentLoaded', function() {
  renderWebsite();

  // Tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const cat = this.dataset.cat;
      document.querySelectorAll('.product-card').forEach(card => {
        card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
      });
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Nav scroll highlight
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id'); });
    navLinks.forEach(l => {
      l.classList.remove('active');
      if (l.getAttribute('href') === '#' + current) l.classList.add('active');
    });
  });

  // Listen for admin changes
  window.addEventListener('storage', function(e) {
    if (e.key === 'wanhong_data' || e.key === 'wanhong_data_version') {
      renderWebsite();
    }
  });

  // WeChat modal: hijack all inquiry & contact buttons
  document.addEventListener('click', function(e) {
    if (e.target.closest('.btn-inquiry') || e.target.closest('a[href="#contact"]')) {
      e.preventDefault();
      const d = getData();
      document.getElementById('wechat-id-display').textContent = d.contact.wechat || d.contact.phone2;
      document.getElementById('wechat-modal').classList.add('show');
    }
  });
  document.getElementById('wechat-modal').addEventListener('click', function(e) {
    if (e.target === this) closeWechatModal();
  });
});

function closeWechatModal() { document.getElementById('wechat-modal').classList.remove('show'); }
function copyWechat() {
  const id = document.getElementById('wechat-id-display').textContent;
  navigator.clipboard.writeText(id).then(() => {
    const btn = document.querySelector('.btn-copy');
    btn.textContent = '已复制'; btn.classList.add('copied');
    setTimeout(() => { btn.textContent = '复制'; btn.classList.remove('copied'); }, 2000);
  });
}
