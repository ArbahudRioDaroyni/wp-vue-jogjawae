import { generateSrcset } from '../functions/imageUtils.min.js'
const FeaturedImage = {
  name: 'FeaturedImage',
  template: `
    <template v-if="!loading">
      <figure
        v-for="image in featureimage"
        :key="image.id"
        :class="['image', hasclass.figure ? hasclass.figure : '']">
          <img
            decoding="async"
            :width="image.media_details.width"
            :height="image.media_details.height"
            :src="image.media_details.sizes.full.source_url"
            :alt="image.alt_text"
            :class="'image fit-cover wp-image-' + image.id"
            :srcset="generateSrcset(image.media_details.sizes)"
            :sizes="'(max-width: ' + image.media_details.width + 'px) 100vw, ' + image.media_details.width + 'px'">
      </figure>
    </template>

    <template v-else>
      <figure :class="['image is-skeleton', hasclass.figure ? hasclass.figure : '']">
      </figure>
    </template>
  `,
  data() {
    return {
      loading: false,
      featureimage: []
    }
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    hasclass: {
      type: Object,
      required: false,
      default: null
    },
  },
  created() {
    if (this.$props.id !== undefined && this.$props.id !== null && this.$props.id !== 0) {
      this.fetchFeatureImage()
    } else {
      this.loading = true
    }
  },
  methods: {
    async fetchFeatureImage() {
      this.loading = true
      try {
        const API_field = "id,alt_text,media_details"
        const response = await fetch(`${this.$rootlocal}/wp-json/wp/v2/media/${this.$props.id}/?_fields=${API_field}`)
        const image = await response.json()
        // store data
        this.featureimage[0] = image
      } catch (error) {
        console.error('Error fetching image:', error)
      } finally {
        this.loading = false
      }
    },
    generateSrcset(sizes) {
      return generateSrcset(sizes);
    }
  }
}

export default FeaturedImage