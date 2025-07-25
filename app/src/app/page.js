import Image from "next/image";
import style from "./page.module.css";
import logo from "../../public/logo.png";
import drop from "../../public/drop.png";
import play from "../../public/play.png";
import prewImg from "../../public/prewImg.png";
import s1 from "../../public/s1.png";
import s2 from "../../public/s2.png";
import s3 from "../../public/s3.png";
import s4 from "../../public/s4.png";
import d1 from "../../public/d1.png";
import d2 from "../../public/d2.png";
import d3 from "../../public/d3.png";
import nav from "../../public/nav.png";
import step1 from "../../public/step1.png";
import step2 from "../../public/step2.png";
import step3 from "../../public/step3.png";
import bookImg from "../../public/bookImg.png";
import p1 from "../../public/p1.png";
import p2 from "../../public/p2.png";
import p3 from "../../public/p3.png";
import p4 from "../../public/p4.png";
import p5 from "../../public/p5.png";
import email from "../../public/email.png";

export default function Home() {
  return (
    <div className={style.mainWrapper}>
      <div className={style.wrapper}>
        <header>
          <Image src={logo} alt="logo" />
          <div className={style.links}>
            <div className={style.left}>
              <p>Hotels</p>
              <p>Flights</p>
              <p>Bookings</p>
            </div>
            <div className={style.right}>
              <p>Login</p>
              <p className={style.signUp}>Sign up</p>
              <div className={style.dropDown}>
                <p>EN</p>
                <Image src={drop} alt="drop" />
              </div>
            </div>
          </div>
        </header>
        <section className={style.preview}>
          <div className={style.left}>
            <p className={style.prewT}>Best Destinations around the world</p>
            <h1>Travel, enjoy and live a new and full life</h1>
            <p className={style.dop}>
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
            <div className={style.buttons}>
              <p className={style.more}>Find out more</p>
              <div className={style.play}>
                <Image src={play} alt="play" />
                <p>Play Demo</p>
              </div>
            </div>
          </div>
          <div className={style.right}>
            <Image src={prewImg} alt="prewImg" />
          </div>
        </section>
        <section className={style.category}>
          <p className={style.cat}>CATEGORY</p>
          <h1>We Offer Best Services</h1>
          <div className={style.wrapper}>
            <div className={style.block}>
              <Image src={s1} alt="img" />
              <p className={style.title}>Calculated Weather</p>
              <p className={style.dop}>
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
            </div>
            <div className={style.block}>
              <Image src={s2} alt="img" />
              <p className={style.title}>Best Flights</p>
              <p className={style.dop}>
                Engrossed listening. Park gate sell they west hard for the.
              </p>
            </div>
            <div className={style.block}>
              <Image src={s3} alt="img" />
              <p className={style.title}>Local Events</p>
              <p className={style.dop}>
                Barton vanity itself do in it. Preferd to men it engrossed
                listening.{" "}
              </p>
            </div>
            <div className={style.block}>
              <Image src={s4} alt="img" />
              <p className={style.title}>Customization</p>
              <p className={style.dop}>
                We deliver outsourced aviation services for military customers
              </p>
            </div>
          </div>
        </section>
        <section className={style.selling}>
          <p className={style.sel}>Top Selling</p>
          <h1>Top Destinations</h1>
          <div className={style.wrapper}>
            <div className={style.block}>
              <Image src={d1} alt="d1" className={style.mainImg} />
              <div className={style.textBlock}>
                <p>Rome, Italty</p>
                <p>$5,42k</p>
              </div>
              <div className={style.days}>
                <Image src={nav} alt="nav" />
                <p>10 Days Trip</p>
              </div>
            </div>
            <div className={style.block}>
              <Image src={d2} alt="d2" className={style.mainImg}/>
              <div className={style.textBlock}>
                <p>London, UK</p>
                <p>$4.2k</p>
              </div>
              <div className={style.days}>
                <Image src={nav} alt="nav" />
                <p>12 Days Trip</p>
              </div>
            </div>
            <div className={style.block}>
              <Image src={d3} alt="d3" className={style.mainImg} />
              <div className={style.textBlock}>
                <p>Full Europe</p>
                <p>$15k</p>
              </div>
              <div className={style.days}>
                <Image src={nav} alt="nav" />
                <p>28 Days Trip</p>
              </div>
            </div>
          </div>
        </section>
        <section className={style.book}>
          <div className={style.left}>
            <p className={style.pBook}>Easy and Fast</p>
            <h1>Book your next trip in 3 easy steps</h1>
            <div className={style.step}>
              <Image src={step1} alt="stepImg" />
              <div className={style.text}>
                <p className={style.title}>Choose Destination</p>
                <p className={style.dop}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
            <div className={style.step}>
              <Image src={step2} alt="stepImg" />
              <div className={style.text}>
                <p className={style.title}>Make Payment</p>
                <p className={style.dop}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
            <div className={style.step}>
              <Image src={step3} alt="stepImg" />
              <div className={style.text}>
                <p className={style.title}>Reach Airport on Selected Date</p>
                <p className={style.dop}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
          </div>
          <div className={style.right}>
            <Image src={bookImg} alt="bookImg" />
          </div>
        </section>
        <section className={style.review}>
          <div className={style.left}>
            <p className={style.pReview}>Testimonials</p>
            <h1>What people say about Us.</h1>
          </div>
          <div className={style.right}>
            <div className={style.block}>
              <p className={style.textRewiew}>
                “On the Windows talking painted pasture yet its express parties
                use. Sure last upon he same as knew next. Of believed or
                diverted no.”
              </p>
              <p className={style.author}>Mike taylor</p>
              <p className={style.place}>Lahore, Pakistan</p>
            </div>
            <div className={style.slider}>
              <div className={style.button}></div>
              <div className={style.button}></div>
            </div>
          </div>
        </section>
        <section className={style.partnets}>
          <div className={style.partnetsWrapper}>
            <Image src={p1} alt="p1" />
          </div>
          <div className={style.partnetsWrapper}>
            <Image src={p2} alt="p2" />
          </div>
          <div className={style.partnetsWrapper}>
            <Image src={p3} alt="p3" />
          </div>
          <div className={style.partnetsWrapper}>
            <Image src={p4} alt="p4" />
          </div>
          <div className={style.partnetsWrapper}>
            <Image src={p5} alt="p5" />
          </div>
        </section>
        <section className={style.subscribe}>
          <h1>
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </h1>
          <div className={style.form}>
            <input type="text" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </section>
        <footer>
          <div className={style.left}>
            <Image src={logo} alt="logo" />
            <p>Book your trip in minute, get full Control for much longer.</p>
          </div>
          <div className={style.right}>
            <div className={style.block}>
              <h1>Company</h1>
              <p>About</p>
              <p>Careers</p>
              <p>Mobile</p>
            </div>
            <div className={style.block}>
              <h1>Contact</h1>
              <p>Help/FAQ</p>
              <p>Press</p>
              <p>Affilates</p>
            </div>
            <div className={style.block}>
              <h1>More</h1>
              <p>Airlinefees</p>
              <p>Airline</p>
              <p>Low fare tips</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
