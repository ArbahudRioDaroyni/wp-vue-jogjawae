const Me = {
  name: 'Me',
  template: `
    <main id="me">

      <section class="hero is-fullheight has-text-centered">
        <div class="hero-body is-justify-content-center">
          <div class="">
            <span class="subtitle">Hey world! I'm</span>
            <h1 class="title">Roy</h1>
            <h2 class="subtitle">Website Developer | SEO Enthusiast | Blogger</h2>
          </div>
        </div>
      </section>

      <section class="section">

        <div class="mb-5">
          <h2 class="title is-2">About Me</h2>
          <span class="subtitle is-5">Arbahud Rio Daroyni, IT Enthusiast</span>
          <p>
            Blogger and a Web developer with more than <strong>4 years</strong> of well-rounded experience with a degree in the
            field of
            <strong>Informatic Engineering</strong>, extensive knowledge of modern Web techniques and also interest in <strong>SEO</strong>.
            Looking for an opportunity to work and upgrade, as well as being involved in an organization that
            believes
            in gaining a competitive edge and giving back to the community.
          </p>
        </div>

        <div class="columns">
          <div class="column">
            <!-- Profile -->
            <div class="card">
              <div class="card-content">
                <h3 class="title is-4">Bio:</h3>
                <div class="content">
                  <table class="table-profile">
                    <tr>
                      <th colspan="1"></th>
                      <th colspan="2"></th>
                    </tr>
                    <tr>
                      <td>Address:</td>
                      <td>Sidoarjo, Indonesia</td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>arbahudriodaroyni@gmail.com</td>
                    </tr>
                  </table>
                </div>
                <br>
                <h3 class="title is-4">Find me on:</h3>
                <div class="buttons has-addons is-centered">
                  <a href="https://github.com/ArbahudRioDaroyni" class="button">
                    <img
                      :src="$homeURL + '/wp-content/themes/wp-vue-jogjawae/assets/svg/social-github.svg'"
                      alt="Find us on Instagram"
                      width="20"
                      height="20">
                  </a>
                  <a href="https://www.linkedin.com/in/arbahud-rio-daroyni-062100146/" class="button">
                    <img
                      :src="$homeURL + '/wp-content/themes/wp-vue-jogjawae/assets/svg/social-linkedin.svg'"
                      alt="Find us on Instagram"
                      width="20"
                      height="20">
                  </a>
                  <a href="https://www.facebook.com/arbahudrio.daroyni" class="button">
                    <img
                      :src="$homeURL + '/wp-content/themes/wp-vue-jogjawae/assets/svg/social-facebook.svg'"
                      alt="Find us on Instagram"
                      width="20"
                      height="20">
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="column">
            <!-- Skills -->
            <div class="card">
              <div class="card-content skills-content">
                <h3 class="title is-4">Skills</h3>
                <div class="content">

                  <article class="media">
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>JavaScript:</strong>
                          <br>
                          <progress class="progress is-primary" value="90" max="100"></progress>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article class="media">
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>Vue.js:</strong>
                          <br>
                          <progress class="progress is-primary" value="90" max="100"></progress>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article class="media">
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>Node.js:</strong>
                          <br>
                          <progress class="progress is-primary" value="75" max="100"></progress>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article class="media">
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>HTML5/CSS3</strong>
                          <br>
                          <progress class="progress is-primary" value="95" max="100"></progress>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article class="media">
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>Databases</strong>
                          <br>
                          <progress class="progress is-primary" value="66" max="100"></progress>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
    <Footer />
  `,
  data() {
    return {
      loading: false,
      error: null,
    }
  }
}

export default Me