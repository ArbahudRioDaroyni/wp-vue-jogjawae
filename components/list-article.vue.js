import { truncateText } from '../functions/textUtils.min.js'
import FeaturedImage from './featured-image.vue.js'

const ListArticle = {
  name: 'ListArticle',
  template: `
    <article
      v-for="(post, index) in posts"
      :key="post.id"
      :class="index === 0 ? 'pointer column is-8 mb-5' : 'pointer column is-4 mb-5'"
      @click="$goToLink(post.slug)">
      <div class="card">
        <div class="card-image">
          <featured-image :id="post.featured_media" :hasclass="{ 'figure': 'is-5by4', 'img': '350px' }" />
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content" style="overflow: unset;">
              <h2
                v-html="post.title.rendered"
                class="title is-4">
              </h2>
              <a class="subtitle is-6">@{{ post.yoast_head_json.author }}</a>
            </div>
          </div>
          <div class="content">
            {{ truncateText(post.excerpt.rendered, 200) }}
            <br><br>
            <time
                :datetime="post.modified_gmt"
                v-html="new Date(post.modified_gmt).toLocaleString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'})">
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
  components: {
    FeaturedImage
  },
  methods: {
    truncateText(text, maxLength) {
      return truncateText(text, maxLength);
    }
  }
}

export default ListArticle