// ==========================================
// 万泓科技 — 后台管理系统
// ==========================================

let data = JSON.parse(JSON.stringify(SITE_DATA));

// ===== INIT =====
function init() {
  const saved = localStorage.getItem('wanhong_data');
  if (saved) {
    try { data = JSON.parse(saved); } catch(e) { data = JSON.parse(JSON.stringify(SITE_DATA)); }
  }
  refreshAll();
  loadCompanyForm();
  loadContactForm();

  // Form handlers
  document.getElementById('company-form').addEventListener('submit', saveCompany);
  document.getElementById('contact-form').addEventListener('submit', saveContact);
  document.getElementById('product-form').addEventListener('submit', saveProduct);

  // Sidebar nav
  document.querySelectorAll('.sidebar-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const page = this.dataset.page;
      switchPage(page);
    });
  });
}

// ===== PAGE SWITCHING =====
function switchPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));

  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');

  const navLink = document.querySelector(`[data-page="${page}"]`);
  if (navLink) navLink.classList.add('active');

  refreshAll();
}

// ===== REFRESH =====
function refreshAll() {
  renderDashboard();
  renderProducts();
  updateStats();
}

function updateStats() {
  document.getElementById('stat-products').textContent = data.products.length;
  const cats = new Set(data.products.map(p => p.category));
  document.getElementById('stat-categories').textContent = cats.size;
  document.getElementById('stat-stock').textContent = data.products.filter(p => p.stock).length;
  document.getElementById('stat-lastupdate').textContent = new Date().toLocaleDateString('zh-CN');
  document.getElementById('product-count').textContent = data.products.length;
}

// ===== DASHBOARD =====
function renderDashboard() {
  const tbody = document.getElementById('dashboard-products');
  tbody.innerHTML = data.products.slice(0, 5).map(p => `
    <tr>
      <td>${p.name}</td>
      <td>${p.model}</td>
      <td><span class="badge badge-info">${catLabel(p.category)}</span></td>
      <td>${p.stock ? '<span class="badge badge-success">有货</span>' : '<span class="badge badge-warning">缺货</span>'}</td>
    </tr>
  `).join('');
}

// ===== PRODUCTS =====
function renderProducts() {
  const tbody = document.getElementById('products-table');
  tbody.innerHTML = data.products.map((p, i) => `
    <tr>
      <td><img src="${p.image}" alt="${p.name}" style="width:50px;height:50px;object-fit:contain;background:#f9f9f9;border-radius:4px;"></td>
      <td><strong>${p.name}</strong></td>
      <td>${p.model}</td>
      <td>${p.capacity}</td>
      <td><span class="badge badge-info">${catLabel(p.category)}</span></td>
      <td>${p.stock ? '<span class="badge badge-success">有货</span>' : '<span class="badge badge-warning">缺货</span>'}</td>
      <td>
        <button class="btn btn-sm btn-outline mr-2" onclick="editProduct(${p.id})">✏️ 编辑</button>
        <button class="btn btn-sm btn-danger" onclick="deleteProduct(${p.id})">🗑 删除</button>
      </td>
    </tr>
  `).join('');
}

function addProduct() {
  document.getElementById('modal-title').textContent = '新增产品';
  document.getElementById('prod-id').value = '';
  document.getElementById('product-form').reset();
  document.getElementById('prod-category').value = 'cylindrical';
  document.getElementById('prod-stock').value = 'true';
  document.getElementById('prod-image').value = 'images/product_01.png';
  document.getElementById('product-modal').classList.add('show');
  switchPage('products');
}

function editProduct(id) {
  const p = data.products.find(p => p.id === id);
  if (!p) return;
  document.getElementById('modal-title').textContent = '编辑产品';
  document.getElementById('prod-id').value = p.id;
  document.getElementById('prod-name').value = p.name;
  document.getElementById('prod-model').value = p.model;
  document.getElementById('prod-capacity').value = p.capacity;
  document.getElementById('prod-voltage').value = p.voltage;
  document.getElementById('prod-size').value = p.size;
  document.getElementById('prod-usage').value = p.usage;
  document.getElementById('prod-type').value = p.type;
  document.getElementById('prod-category').value = p.category;
  document.getElementById('prod-image').value = p.image;
  document.getElementById('prod-stock').value = p.stock ? 'true' : 'false';
  document.getElementById('product-modal').classList.add('show');
  switchPage('products');
}

function deleteProduct(id) {
  if (!confirm('确定要删除这个产品吗？此操作不可恢复。')) return;
  data.products = data.products.filter(p => p.id !== id);
  saveData();
  refreshAll();
  toast('产品已删除', 'success');
}

function saveProduct(e) {
  e.preventDefault();
  const id = document.getElementById('prod-id').value;
  const prod = {
    id: id ? parseInt(id) : Date.now(),
    name: document.getElementById('prod-name').value,
    model: document.getElementById('prod-model').value,
    capacity: document.getElementById('prod-capacity').value,
    voltage: document.getElementById('prod-voltage').value,
    size: document.getElementById('prod-size').value,
    usage: document.getElementById('prod-usage').value,
    type: document.getElementById('prod-type').value,
    category: document.getElementById('prod-category').value,
    image: document.getElementById('prod-image').value,
    stock: document.getElementById('prod-stock').value === 'true'
  };

  if (id) {
    const idx = data.products.findIndex(p => p.id === parseInt(id));
    if (idx >= 0) data.products[idx] = prod;
  } else {
    data.products.unshift(prod);
  }

  saveData();
  refreshAll();
  closeModal();
  toast(id ? '产品已更新' : '产品已添加', 'success');
}

function closeModal() {
  document.getElementById('product-modal').classList.remove('show');
}

// ===== COMPANY =====
function loadCompanyForm() {
  const c = data.company;
  document.getElementById('comp-name').value = c.name || '';
  document.getElementById('comp-nameEn').value = c.nameEn || '';
  document.getElementById('comp-slogan').value = c.slogan || '';
  document.getElementById('comp-about').value = c.about || '';
  if (c.stats && c.stats.length >= 4) {
    document.getElementById('stat1-num').value = c.stats[0].num;
    document.getElementById('stat1-label').value = c.stats[0].label;
    document.getElementById('stat2-num').value = c.stats[1].num;
    document.getElementById('stat2-label').value = c.stats[1].label;
    document.getElementById('stat3-num').value = c.stats[2].num;
    document.getElementById('stat3-label').value = c.stats[2].label;
    document.getElementById('stat4-num').value = c.stats[3].num;
    document.getElementById('stat4-label').value = c.stats[3].label;
  }
}

function saveCompany(e) {
  e.preventDefault();
  data.company = {
    name: document.getElementById('comp-name').value,
    nameEn: document.getElementById('comp-nameEn').value,
    slogan: document.getElementById('comp-slogan').value,
    sloganEn: SITE_DATA.company.sloganEn,
    about: document.getElementById('comp-about').value,
    stats: [
      { num: document.getElementById('stat1-num').value, label: document.getElementById('stat1-label').value },
      { num: document.getElementById('stat2-num').value, label: document.getElementById('stat2-label').value },
      { num: document.getElementById('stat3-num').value, label: document.getElementById('stat3-label').value },
      { num: document.getElementById('stat4-num').value, label: document.getElementById('stat4-label').value }
    ]
  };
  saveData();
  toast('公司信息已保存', 'success');
}

// ===== CONTACT =====
function loadContactForm() {
  const c = data.contact;
  document.getElementById('ctc-address').value = c.address || '';
  document.getElementById('ctc-person').value = c.contactPerson || '';
  document.getElementById('ctc-phone1').value = c.phone1 || '';
  document.getElementById('ctc-phone2Label').value = c.phone2Label || '';
  document.getElementById('ctc-phone2').value = c.phone2 || '';
  document.getElementById('ctc-email').value = c.email || '';
  document.getElementById('ctc-wechat').value = c.wechat || '';
}

function saveContact(e) {
  e.preventDefault();
  data.contact = {
    address: document.getElementById('ctc-address').value,
    contactPerson: document.getElementById('ctc-person').value,
    phone1: document.getElementById('ctc-phone1').value,
    phone2: document.getElementById('ctc-phone2').value,
    phone2Label: document.getElementById('ctc-phone2Label').value,
    email: document.getElementById('ctc-email').value,
    wechat: document.getElementById('ctc-wechat').value
  };
  saveData();
  toast('联系方式已保存', 'success');
}

// ===== DATA PERSISTENCE =====
function saveData() {
  localStorage.setItem('wanhong_data', JSON.stringify(data));
  // Also update the global for the frontend
  localStorage.setItem('wanhong_data_version', Date.now().toString());
}

// ===== EXPORT/IMPORT =====
function exportData() {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `wanhong_backup_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  toast('数据已导出下载', 'success');
}

function importData() {
  const fileInput = document.getElementById('import-file');
  const file = fileInput.files[0];
  if (!file) { toast('请先选择JSON备份文件', 'error'); return; }
  if (!confirm('导入将覆盖当前所有数据，确定继续？')) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (!imported.products || !imported.company) {
        toast('文件格式不正确', 'error'); return;
      }
      data = imported;
      saveData();
      refreshAll();
      loadCompanyForm();
      loadContactForm();
      toast('数据导入成功！', 'success');
    } catch(err) {
      toast('文件解析失败，请检查JSON格式', 'error');
    }
  };
  reader.readAsText(file);
}

function resetData() {
  if (!confirm('确定要恢复为默认数据吗？所有修改将丢失！')) return;
  if (!confirm('再次确认：此操作不可撤销！')) return;
  data = JSON.parse(JSON.stringify(SITE_DATA));
  saveData();
  refreshAll();
  loadCompanyForm();
  loadContactForm();
  toast('已恢复默认数据', 'success');
}

// ===== HELPERS =====
function catLabel(cat) {
  const map = { 'cylindrical': '圆柱型电芯', 'cbd': 'CBD方形电池', 'custom': '定制电池' };
  return map[cat] || cat;
}

function toast(msg, type) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast toast-' + type + ' show';
  setTimeout(() => { t.classList.remove('show'); }, 2500);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', init);

// Modal click outside to close
document.getElementById('product-modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});
