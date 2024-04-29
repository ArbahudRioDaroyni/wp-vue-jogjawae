const FeaturedImage = {
  name: 'FeaturedImage',
  template: `
    <figure
      v-for="image in featureimage"
      :key="image.id"
      class="image is-16by9">
        <img
          decoding="async"
          :width="image.media_details.width"
          height="image.media_details.height"
          :src="image.media_details.sizes.full.source_url"
          :alt="image.alt_text"
          :class="'image fit-cover wp-image-' + image.id"
          :srcset="generateSrcset(image.media_details.sizes)"
          :sizes="'(max-width: ' + image.media_details.width + 'px) 100vw, ' + image.media_details.width + 'px'">
    </figure>
  `,
  data() {
    return {
      featureimage: []
    }
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  created() {
    this.fetchFeatureImage()
  },
  methods: {
    async fetchFeatureImage() {
      try {
        const API_field = "id,alt_text,media_details"
        const response = await fetch(`${window.location.origin}/wp-json/wp/v2/media/${this.$props.id}/?_fields=${API_field}`)
        const image = await response.json()
        // store data
        this.featureimage[0] = image
      } catch (error) {
        console.error('Error fetching image:', error)
      }
    },
    generateSrcset(sizes) {
      let srcset = '';
      for (const key in sizes) {
        if (sizes.hasOwnProperty(key)) {
          const size = sizes[key];
          srcset += `${size.source_url} ${size.width}w, `;
        }
      }
      return srcset.trim().slice(0, -1);
    }
  }
}

export default FeaturedImage