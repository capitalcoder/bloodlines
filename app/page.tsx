import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Check,
  Cloud,
  GitBranch,
  LockKeyhole,
  MapPin,
  Server,
  ShieldCheck,
  Users,
} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Bloodlines | Cerita keluarga, terus hidup",
  description:
    "Simpan silsilah, hubungkan keluarga, dan rencanakan pertemuan lintas generasi dengan Bloodlines.",
}

export default function Page() {
  return (
    <main className="bloodlines-page">
      <header className="site-header">
        <a className="wordmark" href="#beranda" aria-label="Bloodlines, beranda">
          <span className="wordmark-mark" aria-hidden="true">
            <GitBranch size={20} strokeWidth={1.8} />
          </span>
          <span>bloodlines</span>
        </a>
        <nav className="main-nav" aria-label="Navigasi utama">
          <a href="#cerita">Cerita keluarga</a>
          <a href="#pertemuan">Pertemuan</a>
          <a href="#paket">Paket</a>
        </nav>
        <div className="header-actions">
          <Link className="header-login" href="/login">Masuk</Link>
          <a className="header-cta" href="#paket">
            Mulai merangkai <ArrowUpRight size={16} />
          </a>
        </div>
      </header>

      <section className="hero" id="beranda">
        <div className="hero-copy">
          <p className="eyebrow"><span /> WARISAN YANG TERHUBUNG</p>
          <h1>Setiap keluarga punya <em>cerita.</em></h1>
          <p className="hero-description">
            Rangkum kisah dan garis keturunan keluarga dalam satu ruang yang
            tumbuh bersama. Dari generasi ke generasi, tak ada nama yang
            terlupakan.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#paket">
              Temukan paketmu <ArrowUpRight size={17} />
            </a>
            <a className="text-link" href="#cerita">
              Kenali Bloodlines <ArrowDown size={15} />
            </a>
          </div>
          <div className="hero-note">
            <span className="note-icon"><ShieldCheck size={17} /></span>
            <span>Privasi keluarga tetap milik keluarga.</span>
          </div>
        </div>

        <div className="family-visual" aria-label="Contoh bagan silsilah keluarga">
          <div className="visual-topline">
            <span><span className="live-dot" /> POHON KELUARGA</span>
            <span className="visual-count">4 generasi <span>·</span> 128 anggota</span>
          </div>
          <div className="family-tree">
            <div className="tree-level level-one">
              <div className="person-node featured-node">
                <span className="avatar avatar-terracotta">SH</span>
                <span><strong>Soedjono</strong><small>1918 — 1998</small></span>
                <span className="node-dot" />
              </div>
            </div>
            <div className="tree-connect trunk-one" />
            <div className="tree-connect branch-one" />
            <div className="tree-level level-two">
              <div className="person-node">
                <span className="avatar avatar-yellow">SW</span>
                <span><strong>Sri Wahyuni</strong><small>Putri pertama</small></span>
                <span className="node-dot" />
              </div>
              <div className="person-node">
                <span className="avatar avatar-blue">ST</span>
                <span><strong>Sutrisno</strong><small>Putra kedua</small></span>
                <span className="node-dot" />
              </div>
            </div>
            <div className="tree-connect trunk-two" />
            <div className="tree-connect branch-two" />
            <div className="tree-level level-three">
              <div className="person-node compact-node">
                <span className="avatar avatar-green">RA</span>
                <span><strong>Ratna</strong><small>4 anggota</small></span>
              </div>
              <div className="person-node compact-node">
                <span className="avatar avatar-pink">DP</span>
                <span><strong>Dimas</strong><small>3 anggota</small></span>
              </div>
              <div className="person-node compact-node">
                <span className="avatar avatar-lilac">AN</span>
                <span><strong>Anisa</strong><small>2 anggota</small></span>
              </div>
            </div>
            <div className="tree-connect trunk-three" />
            <div className="tree-level level-four">
              <span className="descendant-pill">Generasi berikutnya</span>
              <span className="descendant-pill">+ 26 anggota</span>
              <span className="descendant-pill">Terus bertumbuh <ArrowUpRight size={12} /></span>
            </div>
          </div>
          <div className="visual-footer">
            <span><Users size={15} /> Terhubung lintas generasi</span>
            <span className="tree-legend"><i /> Anda di sini</span>
          </div>
          <div className="visual-stamp" aria-hidden="true">AKAR<br />YANG SAMA</div>
        </div>
        <div className="hero-index" aria-hidden="true">01 / 03</div>
      </section>

      <section className="intro-strip" id="cerita">
        <div className="intro-label"><span>01</span> SIMPAN CERITANYA</div>
        <p>Nama memberi kita awal. <strong>Cerita membuat kita saling mengenal.</strong></p>
        <a href="#fitur" aria-label="Lihat fitur Bloodlines"><ArrowDown size={18} /></a>
      </section>

      <section className="features-section" id="fitur">
        <div className="section-heading">
          <p className="eyebrow"><span /> SATU TEMPAT UNTUK SEMUANYA</p>
          <h2>Dirangkai bersama.<br /><em>Dijaga selamanya.</em></h2>
        </div>
        <div className="feature-grid">
          <article className="feature-item feature-tree">
            <div className="feature-icon"><GitBranch size={21} /></div>
            <span className="feature-number">01 / KETURUNAN</span>
            <h3>Garis yang jadi cerita</h3>
            <p>Bangun bagan keluarga yang mudah dibaca, dilengkapi relasi, foto, dan kisah di balik setiap nama.</p>
            <div className="mini-branch" aria-hidden="true"><i /><i /><i /><i /></div>
          </article>
          <article className="feature-item feature-gathering" id="pertemuan">
            <div className="feature-icon"><CalendarDays size={21} /></div>
            <span className="feature-number">02 / KEBERSAMAAN</span>
            <h3>Jarak jadi lebih dekat</h3>
            <p>Rencanakan reuni, bagikan detail acara, dan bantu semua anggota keluarga hadir di momen yang sama.</p>
            <div className="event-preview">
              <span className="event-date"><b>24</b><small>AGU</small></span>
              <span><strong>Reuni Keluarga Besar</strong><small><MapPin size={12} /> Yogyakarta · 10.00 WIB</small></span>
              <ArrowUpRight size={16} />
            </div>
          </article>
          <article className="feature-item feature-private">
            <div className="feature-icon"><LockKeyhole size={21} /></div>
            <span className="feature-number">03 / KETENANGAN</span>
            <h3>Ruang yang tetap privat</h3>
            <p>Atur siapa yang dapat melihat dan mengelola data. Karena cerita keluarga bukan konsumsi publik.</p>
            <div className="privacy-line"><ShieldCheck size={15} /> Kendali akses di tangan keluarga</div>
          </article>
        </div>
      </section>

      <section className="hosting-section" id="paket">
        <div className="hosting-copy">
          <p className="eyebrow"><span /> ANDA TENTUKAN TEMPATNYA</p>
          <h2>Nyaman di cloud.<br /><em>Atau tetap di rumah.</em></h2>
          <p className="hosting-description">Mulai sederhana dengan layanan berlangganan, atau simpan semuanya di server milik Anda sendiri. Cerita yang sama, kendali yang sesuai kebutuhan.</p>
          <a className="hosting-contact" href="mailto:halo@bloodlines.id">Bicarakan kebutuhan keluarga <ArrowUpRight size={16} /></a>
        </div>
        <div className="hosting-options">
          <article className="hosting-option cloud-option">
            <div className="option-symbol"><Cloud size={22} /></div>
            <div className="option-title"><span>01 / TERKELOLA UNTUK ANDA</span><h3>Bloodlines Cloud</h3></div>
            <p>Langsung digunakan, tanpa mengurus server. Biaya langganan yang jelas dan pembaruan selalu terjaga.</p>
            <ul>
              <li><Check size={15} /> Berlangganan bulanan atau tahunan</li>
              <li><Check size={15} /> Hosting dan pembaruan termasuk</li>
              <li><Check size={15} /> Akses keluarga dari mana saja</li>
            </ul>
            <a href="mailto:halo@bloodlines.id?subject=Bloodlines%20Cloud">Jelajahi subscription <ArrowUpRight size={15} /></a>
          </article>
          <article className="hosting-option onsite-option">
            <div className="option-symbol"><Server size={22} /></div>
            <div className="option-title"><span>02 / KENDALI PENUH</span><h3>On-premise</h3></div>
            <p>Pasang di infrastruktur sendiri untuk kebutuhan privasi, kepatuhan, atau kebijakan organisasi.</p>
            <ul>
              <li><Check size={15} /> Data tersimpan di server Anda</li>
              <li><Check size={15} /> Kendali penuh atas infrastruktur</li>
              <li><Check size={15} /> Dukungan implementasi tersedia</li>
            </ul>
            <a href="mailto:halo@bloodlines.id?subject=Bloodlines%20On-premise">Diskusikan instalasi <ArrowUpRight size={15} /></a>
          </article>
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-mark"><GitBranch size={24} /></div>
        <p>Untuk mereka yang sudah ada.<br />Untuk mereka yang akan datang.</p>
        <a className="button-light" href="mailto:halo@bloodlines.id">Mulai percakapan <ArrowUpRight size={16} /></a>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#beranda"><span className="wordmark-mark"><GitBranch size={18} /></span><span>bloodlines</span></a>
        <span className="footer-note">Satu keluarga, banyak cerita.</span>
        <span className="footer-copyright">© 2026 Bloodlines</span>
      </footer>
    </main>
  )
}
