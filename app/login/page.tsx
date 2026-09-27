"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, GitBranch, LockKeyhole, Mail } from "lucide-react"

export default function LoginPage() {
  const [notice, setNotice] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setNotice("Layanan login belum terhubung. Silakan hubungi administrator keluarga.")
  }

  return (
    <main className="login-page">
      <header className="login-header">
        <Link className="wordmark" href="/" aria-label="Bloodlines, beranda">
          <span className="wordmark-mark" aria-hidden="true"><GitBranch size={20} strokeWidth={1.8} /></span>
          <span>bloodlines</span>
        </Link>
        <Link className="login-back-link" href="/"><ArrowLeft size={15} /> Kembali ke beranda</Link>
      </header>

      <section className="login-main">
        <aside className="login-story">
          <p className="eyebrow"><span /> RUANG KELUARGA ANDA</p>
          <h1>Cerita kita,<br /><em>tersimpan di sini.</em></h1>
          <p>Masuk kembali untuk merawat silsilah, berbagi kabar, dan menjaga rencana pertemuan tetap dekat.</p>
          <div className="login-story-rule"><span /> SEJAK DULU, UNTUK SELAMANYA</div>
          <div className="login-ornament" aria-hidden="true">
            <i /><i /><i /><i /><i /><i /><i />
          </div>
        </aside>

        <div className="login-form-wrap">
          <div className="login-form-heading">
            <span className="login-form-icon"><LockKeyhole size={19} /></span>
            <p className="eyebrow"><span /> SELAMAT DATANG KEMBALI</p>
            <h2>Masuk ke Bloodlines</h2>
            <p>Gunakan akun yang sudah terdaftar untuk melanjutkan.</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Alamat email</label>
            <div className="login-input-wrap">
              <Mail size={17} aria-hidden="true" />
              <input id="email" name="email" type="email" autoComplete="email" placeholder="nama@email.com" required />
            </div>

            <div className="password-label-row">
              <label htmlFor="password">Kata sandi</label>
              <a href="mailto:halo@bloodlines.id?subject=Bantuan%20akses%20akun">Lupa kata sandi?</a>
            </div>
            <div className="login-input-wrap">
              <LockKeyhole size={17} aria-hidden="true" />
              <input id="password" name="password" type="password" autoComplete="current-password" placeholder="Masukkan kata sandi" required />
            </div>

            <label className="remember-option">
              <input type="checkbox" name="remember" />
              <span>Ingat saya di perangkat ini</span>
            </label>

            <button className="login-submit" type="submit">Masuk <ArrowUpRight size={16} /></button>
            <p className="login-notice" role="status" aria-live="polite">{notice}</p>
          </form>

          <div className="login-help">
            <span>Belum punya akses keluarga?</span>
            <a href="mailto:halo@bloodlines.id?subject=Permintaan%20akses%20Bloodlines">Hubungi administrator <ArrowUpRight size={13} /></a>
          </div>
          <p className="login-privacy"><LockKeyhole size={13} /> Data keluarga Anda dijaga dengan privasi.</p>
        </div>
      </section>

      <footer className="login-footer">
        <span>© 2026 Bloodlines</span>
        <Link href="/">Satu keluarga, banyak cerita.</Link>
      </footer>
    </main>
  )
}