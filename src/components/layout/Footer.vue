<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-background text-foreground pb-8 pt-2 flex justify-center w-full">
    <div class="max-w-[90%] w-full mx-auto bg-card text-card-foreground rounded-3xl border border-border shadow-lg p-8 sm:p-14 transition-colors duration-300">
      <div class="footer-container">
        
        <!-- Top Section: Email & Social Media -->
        <div class="footer-top-row">
          <div class="email-block">
            <p class="section-label">{{ t('footer.pingUs') }}</p>
            <a href="mailto:contact@agdighulia.org" class="large-email">
              contact@agdighulia.org
            </a>
          </div>

          <!-- Social Media Block (Replaced Newsletter) -->
          <div class="social-block">
            <p class="social-label">{{ t('footer.socialMedia') }}</p>
            <div class="social-icons-grid">
              
              <!-- Facebook -->
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-icon-btn facebook" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <!-- YouTube -->
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="social-icon-btn youtube" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              <!-- Instagram -->
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-icon-btn instagram" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <!-- Map -->
              <a href="https://maps.app.goo.gl/YvjE49rcEAqGosXT7" target="_blank" rel="noopener noreferrer" class="social-icon-btn map" aria-label="Map"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </a>

              <!-- WhatsApp -->
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" class="social-icon-btn whatsapp" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>

              <!-- Website -->
              
                <a href="https://meetrohan.netlify.app/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                </a>
                
            </div>
          </div>
        </div>

        <div class="footer-divider"></div>

        <!-- Middle Section: Navigation & Office Details -->
        <div class="footer-mid-row">
          <nav class="footer-nav-list" aria-label="Footer Navigation">
            <RouterLink to="/">{{ t('nav.home') }}</RouterLink>
            <RouterLink to="/history">{{ t('nav.history') }}</RouterLink>
            <RouterLink to="/map">{{ t('nav.map') }}</RouterLink>
            <RouterLink to="/gallery">{{ t('nav.gallery') }}</RouterLink>
            <RouterLink to="/about">{{ t('nav.about') }}</RouterLink>
          </nav>

          <div class="office-info">
            <h3>{{ t('footer.office') }}</h3>
            <p>
              {{ t('footer.addressLine1') }}<br />
              {{ t('footer.addressLine2') }}<br />
              {{ t('footer.addressLine3') }}<br />
              1936
            </p>
          </div>
        </div>

        <!-- Giant Brand Banner -->
        <div class="footer-brand-banner">
          <div class="brand-badge-group">
            <span class="badge-circle">A</span>
            <div class="badge-line"></div>
          </div>
          <h2 class="giant-brand-title">{{ t('nav.brand') }}</h2>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom-bar flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="copyright">&copy;{{ currentYear }} {{ t('footer.rights') }}</p>
          <p class="developer-credit text-xs text-muted-foreground">
            {{ t('footer.developer') }}:
            <a
              href="https://meetrohan.netlify.app/"
              target="_blank"
              class="font-bold text-[#FF3D00] hover:underline no-underline transition-colors ml-1 inline-flex items-center gap-1"
            >
              <span>Rohan</span>
              <span aria-hidden="true">&nearr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  display: flex;
  flex-direction: column;
}

.footer-top-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap;
}

.section-label {
  color: var(--muted-foreground);
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 8px;
}

.large-email {
  font-size: clamp(26px, 4vw, 44px);
  font-weight: 500;
  color: var(--color-ink-dark);
  text-decoration: none;
  letter-spacing: -0.02em;
  transition: color 0.2s ease;
}

.large-email:hover {
  color: #FF3D00;
}

/* Social Media Block */
.social-block {
  display: flex;
  flex-direction: column;
}

.social-label {
  color: var(--color-ink-dark);
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 14px;
}

.social-icons-grid {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.social-icon-btn {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--color-soft);
  border: 1px solid var(--color-border);
  color: var(--color-ink-dark);
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
}

.social-icon-btn:hover {
  transform: translateY(-4px) scale(1.08);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
  color: white;
}

.social-icon-btn.facebook:hover {
  background: #1877F2;
  border-color: #1877F2;
}

.social-icon-btn.youtube:hover {
  background: #FF0000;
  border-color: #FF0000;
}

.social-icon-btn.instagram:hover {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  border-color: #dc2743;
}

.social-icon-btn.map:hover {
  background: #EA4335;
  border-color: #EA4335;
}

.social-icon-btn.whatsapp:hover {
  background: #25D366;
  border-color: #25D366;
}

.social-icon-btn.website:hover {
  background: #FF3D00;
  border-color: #FF3D00;
}

.footer-divider {
  height: 1px;
  background: var(--color-border);
  margin: 50px 0 45px;
}

.footer-mid-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  margin-bottom: 50px;
}

.footer-nav-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer-nav-list a {
  font-size: 18px;
  font-weight: 500;
  color: var(--color-ink);
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;
}

.footer-nav-list a:hover {
  color: #FF3D00;
  transform: translateX(4px);
}

.office-info {
  text-align: right;
}

.office-info h3 {
  font-size: 16px;
  font-weight: 700;
  color: var(--color-ink-dark);
  margin-bottom: 12px;
}

.office-info p {
  font-size: 13px;
  color: var(--muted-foreground);
  line-height: 1.75;
}

.footer-brand-banner {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 20px;
  flex-wrap: wrap;
}

.brand-badge-group {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.badge-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  background: var(--color-soft);
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 700;
  color: var(--color-brand);
}

.badge-line {
  width: 90px;
  height: 2px;
  background: var(--color-border);
}

.giant-brand-title {
  font-size: clamp(54px, 11vw, 150px);
  font-weight: 700;
  color: var(--color-ink-dark);
  line-height: 0.85;
  letter-spacing: -0.04em;
  margin: 0;
  user-select: none;
}

.footer-bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
}

.copyright {
  font-size: 12px;
  color: var(--muted-foreground);
  margin: 0;
}

@media (max-width: 768px) {
  .footer-top-row {
    flex-direction: column;
    gap: 30px;
  }

  .footer-mid-row {
    flex-direction: column;
    gap: 30px;
  }

  .office-info {
    text-align: left;
  }

  .footer-brand-banner {
    flex-direction: column-reverse;
    align-items: flex-start;
  }

  .brand-badge-group {
    margin-bottom: 0;
  }
}
</style>