/* ---------- Páginas e navegação ---------- */
const pages = Array.from(document.querySelectorAll('.page'));
const navDots = Array.from(document.querySelectorAll('.nav-dot'));
let activePage = 0; // start at login

function renderPages() {
  pages.forEach(p => {
    const pageIndex = Number(p.dataset.page);
    p.dataset.active = (pageIndex === activePage).toString();
    if (pageIndex < activePage) p.dataset.direction = 'left';
    else p.dataset.direction = 'right';
  });
  navDots.forEach(d => d.classList.toggle('active', Number(d.dataset.target) === activePage));
}

function navigateTo(pageIndex) {
  activePage = Math.max(0, Math.min(4, pageIndex));
  renderPages();
}

navDots.forEach(d => d.addEventListener('click', () => navigateTo(Number(d.dataset.target))));

document.addEventListener('DOMContentLoaded', () => {
  // ensure pages exist
  renderPages();

  // Login button
  const btnLogin = document.getElementById('btnLogin');
  btnLogin.addEventListener('click', () => {
    const user = document.getElementById('loginUser').value.trim();
    const pass = document.getElementById('loginPass').value.trim();
    if (!user || !pass) { toast('Preencha usuário e senha (demo)'); return; }
    document.getElementById('userName').textContent = user;
    toast('Bem-vindo, ' + user + '!');
    navigateTo(2);
  });

  // Signup
  document.getElementById('btnSignup').addEventListener('click', () => {
    const name = document.getElementById('signupName').value.trim();
    if (!name) { toast('Digite seu nome (demo)'); return; }
    document.getElementById('userName').textContent = name;
    toast('Perfil criado — bem-vindo ' + name + '!');
    navigateTo(2);
  });

  // Corrige o botão "Entrar como visitante" (leva ao feed)
  document.getElementById('visitorBtn').addEventListener('click', () => {
    document.getElementById('userName').textContent = 'Visitante';
    navigateTo(2);
    toast('Entrou como visitante');
  });

  // "Como solicitar PROERD" do login leva à página PROERD
  document.getElementById('howBtn').addEventListener('click', () => {
    navigateTo(3);
  });

  // popula feed com posts iniciais
  populateFeed();
});

/* ---------- Feed dinâmico (posts de exemplo) ---------- */
const samplePosts = [
  {
    name: "Maria (Profª)",
    time: "Hoje • 09:24",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Tive uma oficina incrível hoje com 30 alunos. Tivemos reflexões sobre escolhas e respeito.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=60",
    comments: [
      {name: "João", text: "Parabéns! Importante tocar nesses temas desde cedo."},
      {name: "Ana", text: "Como posso levar isso para minha escola?"}
    ]
  },
  {
    name: "Voluntário João",
    time: "2 dias",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Mutirão de distribuição de panfletos amanhã na praça central. Venha ajudar!",
    image: null,
    comments: [{name: "Pedro", text: "Vou comparecer!"}]
  },
  {
    name: "Escola Municipal A",
    time: "3 dias",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60",
    text: "Solicitamos material didático ao PROERD e já recebemos apoio. Alunos engajados!",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=60",
    comments: []
  },
  {
    name: "Lucas (Pai)",
    time: "Semana passada",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Participei da roda de conversa para pais. Recomendo a todos.",
    image: null,
    comments: [{name:"Marta", text:"Onde foi realizada?"}, {name:"Lucas", text:"Na escola João XXIII, próxima terça."}]
  }
];

function populateFeed(){
  const feed = document.getElementById('communityFeed');
  feed.innerHTML = '';
  samplePosts.forEach(post => {
    const postEl = document.createElement('div');
    postEl.className = 'post';

    const head = document.createElement('div');
    head.className = 'post-head';
    const avatar = document.createElement('img');
    avatar.className = 'avatar';
    avatar.src = post.avatar;
    avatar.alt = post.name;
    const meta = document.createElement('div');
    meta.className = 'post-meta';
    meta.innerHTML = `<div class="name">${post.name}</div><div class="time muted">${post.time}</div>`;
    head.appendChild(avatar);
    head.appendChild(meta);

    const body = document.createElement('div');
    body.className = 'post-body';
    body.textContent = post.text;

    postEl.appendChild(head);
    postEl.appendChild(body);

    if(post.image){
      const img = document.createElement('img');
      img.className = 'post-img';
      img.src = post.image;
      img.alt = 'Imagem do post';
      postEl.appendChild(img);
    }

    // comments section (preview)
    if(post.comments && post.comments.length){
      const ctn = document.createElement('div');
      ctn.style.marginTop = '8px';
      post.comments.slice(0,3).forEach(c => {
        const cm = document.createElement('div');
        cm.style.fontSize = '13px';
        cm.style.color = 'var(--muted)';
        cm.innerHTML = `<strong style="color:#fff">${c.name}:</strong> ${c.text}`;
        ctn.appendChild(cm);
      });
      postEl.appendChild(ctn);
    }

    feed.appendChild(postEl);
  });
}

/* ---------- Utilitários: cópia, envio simulado, download kit, toast ---------- */
function copyMessage(){
  const txt = document.getElementById('messageModel')?.value || '';
  navigator.clipboard?.writeText(txt).then(()=> toast('Mensagem copiada!'), ()=> toast('Não foi possível copiar'));
}

function simulateSend(){ toast('Mensagem (simulada) enviada à direção da escola'); }

function simulateRequest(){ toast('Solicitação (simulada) registrada. A equipe entrará em contato.') }

function downloadKit(){
  const content = `Kit informativo PROERD - Demo\nVisite o site da Polícia Militar local para obter material oficial.`;
  const blob = new Blob([content], {type:'text/plain'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'kit-proerd-demo.txt'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
  toast('Kit baixado (demo).');
}

/* ---------- Toast estilizado ---------- */
function toast(msg){
  const existing = document.querySelector('.app-toast');
  if(existing) existing.remove();
  const box = document.createElement('div');
  box.className = 'app-toast';
  box.textContent = msg;
  Object.assign(box.style, {
    position:'absolute', bottom:'22px', left:'50%', transform:'translateX(-50%)',
    background: 'linear-gradient(90deg,#e53935,#ff6b6b)', color:'#fff', padding:'10px 16px',
    borderRadius:'12px', boxShadow:'0 8px 30px rgba(229,57,53,0.15)', fontWeight:700, zIndex:9999
  });
  document.querySelector('.phone').appendChild(box);
  setTimeout(()=> box.style.opacity = '1', 10);
  setTimeout(()=> { box.style.opacity = '0'; setTimeout(()=> box.remove(), 400); }, 2000);
}
