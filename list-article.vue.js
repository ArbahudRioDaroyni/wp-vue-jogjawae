const ListArticle = {
  name: 'ListArticle',
  template: `
    <article
      v-for="(post, index) in posts"
      :key="post.id"
      :class="index === 0 ? 'column is-8 mb-5' : 'column is-4 mb-5'"
      @click="goToLink(post.slug)">
      <div class="card">
        <div class="card-image">
          <figure class="image is-6by3">
            <img
              :src="post.yoast_head_json.og_image[0].url"
              :alt="post.title.rendered"
              loading="lazy"
              decoding="async"
              class="fit-cover"
              :style="index === 0 ? 'max-height: 350px' : 'max-height: 350px'"
            />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  :src="post.yoast_head_json.schema['@graph'][post.yoast_head_json.schema['@graph'].length - 1].image.contentUrl"
                  :alt="post.yoast_head_json.author"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            <div class="media-content" style="overflow: unset;">
              <h2
                v-html="post.title.rendered"
                class="title is-4">
              </h2>
              <p class="subtitle is-6">{{ post.yoast_head_json.author }}.</p>
            </div>
          </div>
          <div class="content">
            {{ truncateText(post.excerpt.rendered, 200) }} <a>@bulmaio</a>. <a href="#">#css</a>
            <a href="#">#responsive</a>
            <br />
            <time
              :datetime="post.modified_gmt"
              v-html="post.yoast_head_json.article_published_time">
            </time>
          </div>
        </div>
      </div>
    </article>
  `,
  props: {
    posts: {
      type: Object,
      required: true
    }
  },
  methods: {
    truncateText(text, maxLength) {
      const withoutTags = text.replace(/<[^>]+>/g, ''); // Hapus tag HTML
      if (withoutTags.length <= maxLength) {
        return withoutTags;
      } else {
        // Menghapus spasi ekstra jika kata terakhir terputus
        let truncatedText = withoutTags.substr(0, maxLength);
        truncatedText = truncatedText.substr(0, Math.min(truncatedText.length, truncatedText.lastIndexOf(" ")));
        return truncatedText + '';
      }
    },
    goToLink(route) {
      this.$router.push('/' + route);
    }
  }
}

export default ListArticle