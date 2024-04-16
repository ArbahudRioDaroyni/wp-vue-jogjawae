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
    <div class="card">
      <header class="card-header pointer" @click="toggleToc">
        <p class="card-header-title">Daftar Isi</p>
        <button class="card-header-icon" aria-label="Daftar Isi" aria-haspopup="true" aria-controls="toc">
          <span class="icon" :class="{ 'rotated180': showToc }">
            <i aria-hidden="true">▼</i>
          </span>
        </button>
      </header>
      <div :class="{ 'toc card-content': true, 'is-hidden': !showToc }" id="toc" role="menu">
        <div class="menu">
          <ChildHeadings :headings="headings" />
        </div>
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