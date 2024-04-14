const ChildHeadings = {
  name: 'ChildHeadings',
  template: `
    <div class="menu">
      <p class="menu-label">Daftar Isi</p>
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
    </div>
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
    <div>
      <ChildHeadings :headings="headings" />
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
  }
}

export default TableOfContents
