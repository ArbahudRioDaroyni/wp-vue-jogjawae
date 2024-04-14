const ChildHeadings = {
  name: 'ChildHeadings',
  template: `
    <ul class="menu-list">
      <li v-for="(heading, index) in headings" :key="heading.id">
        <a :href="'#' + heading.id">
          {{ heading.title }}
        </a>
        <template v-if="heading.data && heading.data.length > 0">
          <ChildHeadings :headings="heading.data" />
        </template>
      </li>
    </ul>
  `,
  props: {
    headings: {
      type: Array,
      required: true
    }
  }
}

const TableOfContents = {
  name: 'TableOfContents',
  template: `
    <div class="menu">
      <button class="menu-label" aria-haspopup="true" aria-controls="toc" @click="toggleToc">Daftar Isi</button>
      <div :class="{ 'toc': true, 'is-hidden': !showToc }" id="toc" role="menu">
        <ChildHeadings :headings="headings" />
      </div>
    </div>
  `,
  props: {
    headings: {
      type: Array,
      required: true
    }
  },
  components: {
    ChildHeadings
  },
  data() {
    return {
      showToc: false
    };
  },
  methods: {
    toggleToc() {
      this.showToc = !this.showToc;
    }
  }
}

export default TableOfContents
