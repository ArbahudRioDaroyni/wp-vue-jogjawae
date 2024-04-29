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
  components: {
    ChildHeadings
  },
  data() {
    return {
      headings: [], // table-of-contents
      slug: [], // table-of-contents
      showToc: false
    };
  },
  methods: {
    toggleToc() {
      this.showToc = !this.showToc;
    },
    createTableofContents() {
      const selector = ".content-article h1, .content-article h2, .content-article h3, .content-article h4, .content-article h5, .content-article h6"
      const headings = Array.from(document.querySelectorAll(selector))
    
      this.headings = headings.map((heading, index) => {
        const id = heading.textContent.trim().replace(/\s+/g, '-')
        heading.id = id
        const level = parseInt(heading.tagName.substring(1))
        let parentId = null
    
        // Find the closest parent heading with a lower level
        for (let i = headings.indexOf(heading) - 1; i >= 0; i--) {
          if (parseInt(headings[i].tagName.substring(1)) < level) {
            parentId = headings[i].id
            break
          }
        }
    
        return {
          index: index,
          id: id,
          title: heading.textContent,
          level: level,
          parentId: parentId,
          data: [] // add prop data[] to store childs heading
        };
      });
    
      // headings to headings.parent.data if parentId != null
      this.headings.forEach(heading => {
        if (heading.parentId) {
          const parentHeading = this.headings.find(h => h.id === heading.parentId)
          if (parentHeading) {
            parentHeading.data.push(heading)
          }
        }
      });
    
      // remove childs array headings
      this.headings = this.headings.filter(heading => !heading.parentId)
      this.slug = this.$route.params.slug
    }
  },
  updated() {
    // Start Table 0f Contents
    if (this.headings.length == 0 || this.slug !== this.$route.params.slug) {
      this.createTableofContents()
    }
    // End Table 0f Contents
  }
}

export default TableOfContents