import { BookingForm } from "./components/BookingForm";
import { ArrivalTimePicker } from "./components/ArrivalTimePicker";

export default function Home() {
  return (
    <>
      <header className="site-header" aria-label="網站導覽">
          <nav className="nav">
            <a className="brand" href="#top" aria-label="毛日好首頁">
              <span className="brand-mark" aria-hidden="true">◇</span>
              <span>毛日好 Pet Grooming</span>
            </a>
            <div className="nav-links" aria-label="主要選單">
              <a href="#services">服務</a>
              <a href="#pricing">價格</a>
              <a href="#process">流程</a>
              <a href="#reviews">評價</a>
            </div>
            <a className="nav-cta" href="#booking">預約洗護</a>
          </nav>
        </header>
      
        <main id="top">
          <section className="hero" aria-label="寵物洗護店主視覺">
            <div className="hero-inner">
              <p className="eyebrow">台北預約制寵物洗護</p>
              <h1>讓每一次洗澡，都像回到熟悉的小店。</h1>
              <p className="hero-copy">毛日好替犬貓安排低壓力洗護、皮毛調理與造型修剪。從入店評估到回家叮嚀，每一步都照顧毛孩的情緒與肌膚狀態。</p>
              <div className="hero-actions">
                <a className="button" href="#booking">立即預約</a>
                <a className="button secondary" href="#pricing">查看價格</a>
              </div>
              <ArrivalTimePicker />
              <div className="hero-note" aria-label="店家特色">
                <div>
                  <strong>1 對 1</strong>
                  <span>專屬美容師照護</span>
                </div>
                <div>
                  <strong>低敏</strong>
                  <span>植萃洗劑與分齡護理</span>
                </div>
                <div>
                  <strong>20 分</strong>
                  <span>捷運步行生活圈</span>
                </div>
              </div>
            </div>
          </section>
      
          <section className="services" id="services">
            <div className="section-inner">
              <div className="section-head">
                <h2>從清潔到造型，依照毛孩狀態安排。</h2>
                <p>美容師會先確認膚況、毛結、指甲與耳道，再選擇洗劑、吹整溫度與修剪方式。</p>
              </div>
              <div className="service-grid">
                <article className="service-card">
                  <div className="service-icon" aria-hidden="true">★★★</div>
                  <h3>基礎洗護</h3>
                  <p>潔耳、剪甲、足底毛、肛門腺、雙段式清潔與溫和吹整。</p>
                </article>
                <article className="service-card">
                  <div className="service-icon" aria-hidden="true">⌁</div>
                  <h3>皮毛調理</h3>
                  <p>針對乾癢、換毛、油脂分泌與長毛打結，搭配保濕或蓬鬆護理。</p>
                </article>
                <article className="service-card">
                  <div className="service-icon" aria-hidden="true">◎</div>
                  <h3>造型修剪</h3>
                  <p>圓臉、短身、泰迪、自然輪廓與季節清爽造型，保留毛孩特色。</p>
                </article>
              </div>
            </div>
          </section>
      
          <section className="interior-gallery" id="interior">
            <div className="section-inner">
              <div className="section-head">
                <h2>高端洗護空間，讓毛孩從進門就放鬆</h2>
                <p>以台灣精品寵物洗護店為靈感，呈現接待零售、開放洗護與私密 SPA 三個主要區域。</p>
              </div>
              <div className="interior-carousel" aria-label="店內環境輪播圖">
                <div className="interior-track">
                  <figure className="interior-slide">
                    <img src="/assets/interior-reception.png" alt="高端寵物洗護店接待與精品零售展示區" loading="lazy" />
                    <figcaption className="interior-caption">
                      <b>接待與選品區</b>
                      <span>溫潤木質、石材櫃台與精緻選品，建立安心又高級的第一印象。</span>
                    </figcaption>
                  </figure>
                  <figure className="interior-slide">
                    <img src="/assets/interior-grooming.png" alt="明亮潔淨的寵物洗護與美容工作區" loading="lazy" />
                    <figcaption className="interior-caption">
                      <b>開放洗護區</b>
                      <span>透明隔間、專業設備與乾淨動線，讓照護流程清楚可見。</span>
                    </figcaption>
                  </figure>
                  <figure className="interior-slide">
                    <img src="/assets/interior-spa.png" alt="安靜舒適的寵物 SPA 與休憩空間" loading="lazy" />
                    <figcaption className="interior-caption">
                      <b>私密 SPA 套房</b>
                      <span>柔和光線、舒適材質與舒緩氛圍，適合敏感毛孩慢慢適應。</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="interior-dots" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </section>
      
          <section className="feature-band">
            <div className="section-inner feature-layout">
              <div>
                <p className="eyebrow">安定感優先</p>
                <h2>不趕場、不混籠，給敏感毛孩一點時間。</h2>
                <p>我們採預約制控量服務，讓美容師能看見每隻毛孩的小訊號。害怕吹風、初次洗澡、熟齡犬貓，都會用更慢、更清楚的節奏完成。</p>
                <ul className="check-list">
                  <li>全程記錄洗護重點與下次照護建議</li>
                  <li>獨立消毒工具組，毛巾與浴盆分批清潔</li>
                  <li>可依獸醫建議使用自備藥浴洗劑</li>
                </ul>
              </div>
              <div className="feature-panel" aria-label="服務數據">
                <div className="mini-metric">
                  <b>4.9</b>
                  <span>顧客平均評分</span>
                </div>
                <div className="mini-metric">
                  <b>35+</b>
                  <span>常見犬貓品種經驗</span>
                </div>
                <div className="mini-metric">
                  <b>8 年</b>
                  <span>主理美容師資歷</span>
                </div>
                <div className="mini-metric">
                  <b>0 香精</b>
                  <span>可選無香低敏方案</span>
                </div>
              </div>
            </div>
          </section>
      
          <section className="pricing" id="pricing">
            <div className="section-inner">
              <div className="section-head">
                <h2>透明價格，依體型與毛況微調。</h2>
                <p>以下為常見犬貓起價。嚴重打結、特殊造型或藥浴會於現場評估後報價。</p>
              </div>
              <div className="price-grid">
                <article className="price-card">
                  <h3>小型犬洗護</h3>
                  <div className="price">$700 <small>起</small></div>
                  <ul>
                    <li>適合 7 公斤以下犬種</li>
                    <li>含基礎清潔與吹整</li>
                    <li>約 90 至 120 分鐘</li>
                  </ul>
                </article>
                <article className="price-card featured">
                  <span className="tag">熱門選擇</span>
                  <h3>全身造型修剪</h3>
                  <div className="price">$1,200 <small>起</small></div>
                  <ul>
                    <li>含基礎洗護與全身修剪</li>
                    <li>依生活習慣設計長度</li>
                    <li>完成後提供照護建議</li>
                  </ul>
                </article>
                <article className="price-card">
                  <h3>貓咪舒緩洗護</h3>
                  <div className="price">$1,500 <small>起</small></div>
                  <ul>
                    <li>預約前確認個性與經驗</li>
                    <li>低噪音吹整與分段休息</li>
                    <li>可加購局部剃毛整理</li>
                  </ul>
                </article>
              </div>
            </div>
          </section>
      
          <section className="process" id="process">
            <div className="section-inner">
              <div className="section-head">
                <h2>四個步驟，舒服完成洗護。</h2>
                <p>預約後會先保留足夠時段，避免毛孩等待過久。</p>
              </div>
              <div className="timeline">
                <article className="step">
                  <b>1</b>
                  <h3>線上預約</h3>
                  <p>留下品種、體重、毛況與希望日期。</p>
                </article>
                <article className="step">
                  <b>2</b>
                  <h3>入店評估</h3>
                  <p>美容師確認皮膚、毛結與情緒狀態。</p>
                </article>
                <article className="step">
                  <b>3</b>
                  <h3>洗護修整</h3>
                  <p>使用合適洗劑與溫度，分段安撫。</p>
                </article>
                <article className="step">
                  <b>4</b>
                  <h3>回家叮嚀</h3>
                  <p>告知本次重點與下次保養建議。</p>
                </article>
              </div>
            </div>
          </section>
      
          <section className="reviews" id="reviews">
            <div className="section-inner">
              <div className="section-head">
                <h2>毛爸媽放心交給我們。</h2>
                <p>每次服務都會回報狀態，讓你知道毛孩今天表現得如何。</p>
              </div>
              <div className="review-carousel" aria-label="客戶評價輪播">
                <div className="review-track">
                <article className="review-card">
                  <div className="stars" aria-label="五星評價">★★★★★</div>
                  <p>我家狗很怕吹風，第一次洗完沒有崩潰。美容師會分段休息，還把耳朵狀況講得很清楚。</p>
                  <div className="reviewer"><span className="avatar">林</span>布丁的家人</div>
                </article>
                <article className="review-card">
                  <div className="stars" aria-label="五星評價">★★★★★</div>
                  <p>剪得很自然，沒有把臉修得太誇張。回家後毛也蓬鬆好摸，香味很淡，家人都說像變亮了。</p>
                  <div className="reviewer"><span className="avatar">陳</span>Momo 的家人</div>
                </article>
                <article className="review-card">
                  <div className="stars" aria-label="五星評價">★★★★★</div>
                  <p>貓咪洗澡前會先討論個性，整個過程比想像中穩定。接回來沒有躲起來，晚上還正常吃飯。</p>
                  <div className="reviewer"><span className="avatar">許</span>烏龍的家人</div>
                </article>
                <article className="review-card">
                  <div className="stars" aria-label="五星評價">★★★★★</div>
                  <p>預約前先問皮膚狀況，洗完也會拍照回報。對第一次送洗的我們來說，安心很多。</p>
                  <div className="reviewer"><span className="avatar">黃</span>奶茶的家人</div>
                </article>
                <article className="review-card">
                  <div className="stars" aria-label="五星評價">★★★★★</div>
                  <p>老狗站不久，店裡會調整流程慢慢來。修完腳底毛後走路穩很多，細節真的有顧到。</p>
                  <div className="reviewer"><span className="avatar">周</span>Lucky 的家人</div>
                </article>
                <article className="review-card">
                  <div className="stars" aria-label="五星評價">★★★★★</div>
                  <p>不會硬推加購，會直接說哪些保養現在需要、哪些可以觀察。這種誠實感很難得。</p>
                  <div className="reviewer"><span className="avatar">吳</span>米粒的家人</div>
                </article>
                <article className="review-card duplicate" aria-hidden="true">
                  <div className="stars">★★★★★</div>
                  <p>我家狗很怕吹風，第一次洗完沒有崩潰。美容師會分段休息，還把耳朵狀況講得很清楚。</p>
                  <div className="reviewer"><span className="avatar">林</span>布丁的家人</div>
                </article>
                <article className="review-card duplicate" aria-hidden="true">
                  <div className="stars">★★★★★</div>
                  <p>剪得很自然，沒有把臉修得太誇張。回家後毛也蓬鬆好摸，香味很淡，家人都說像變亮了。</p>
                  <div className="reviewer"><span className="avatar">陳</span>Momo 的家人</div>
                </article>
                <article className="review-card duplicate" aria-hidden="true">
                  <div className="stars">★★★★★</div>
                  <p>貓咪洗澡前會先討論個性，整個過程比想像中穩定。接回來沒有躲起來，晚上還正常吃飯。</p>
                  <div className="reviewer"><span className="avatar">許</span>烏龍的家人</div>
                </article>
                <article className="review-card duplicate" aria-hidden="true">
                  <div className="stars">★★★★★</div>
                  <p>預約前先問皮膚狀況，洗完也會拍照回報。對第一次送洗的我們來說，安心很多。</p>
                  <div className="reviewer"><span className="avatar">黃</span>奶茶的家人</div>
                </article>
                <article className="review-card duplicate" aria-hidden="true">
                  <div className="stars">★★★★★</div>
                  <p>老狗站不久，店裡會調整流程慢慢來。修完腳底毛後走路穩很多，細節真的有顧到。</p>
                  <div className="reviewer"><span className="avatar">周</span>Lucky 的家人</div>
                </article>
                <article className="review-card duplicate" aria-hidden="true">
                  <div className="stars">★★★★★</div>
                  <p>不會硬推加購，會直接說哪些保養現在需要、哪些可以觀察。這種誠實感很難得。</p>
                  <div className="reviewer"><span className="avatar">吳</span>米粒的家人</div>
                </article>
                </div>
              </div>
            </div>
          </section>
      
          <section className="booking" id="booking">
            <div className="section-inner booking-layout">
              <div className="location-panel">
                <div>
                  <p className="eyebrow">預約與諮詢</p>
                  <h2>把毛孩的習慣告訴我們，剩下的交給毛日好。</h2>
                  <p>營業時間為週二至週日 10:00 - 19:00。表單送出後，我們會於營業時間內回覆可預約時段。</p>
                  <div className="contact-lines">
                    <a href="tel:+886223451188">☎ 02-2345-1188</a>
                    <a href="mailto:hello@maodaily.pet">✉ hello@maodaily.pet</a>
                    <span>⌂ 台北市內湖區成功路五段（大湖公園旁）</span>
                  </div>
                </div>
                <figure className="location-card">
                  <img src="/assets/neihu-location-map.png" alt="毛日好位於台北市內湖區成功路五段、大湖公園旁的可愛寵物店風格地圖" loading="lazy" />
                  <figcaption className="location-caption">
                    <strong>毛日好｜內湖大湖公園店</strong>
                    <span>成功路五段沿線，靠近大湖公園與康湖路交會方向。</span>
                  </figcaption>
                </figure>
              </div>
              <BookingForm />
            </div>
          </section>
        </main>
      
        <footer>
          <div className="footer-inner">
            <span>© 2026 毛日好 Pet Grooming</span>
            <span>預約制洗護｜犬貓友善｜低敏照護</span>
          </div>
        </footer>
    </>
  );
}
