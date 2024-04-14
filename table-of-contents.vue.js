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
    <div class="dropdown">
      <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>Dropdown button</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item"> Dropdown item </a>
          <a class="dropdown-item"> Other dropdown item </a>
          <a href="#" class="dropdown-item is-active"> Active dropdown item </a>
          <a href="#" class="dropdown-item"> Other dropdown item </a>
          <hr class="dropdown-divider" />
          <a href="#" class="dropdown-item"> With a divider </a>
        </div>
      </div>
    </div>
    <div class="menu">
      <p class="menu-label">Daftar Isi</p>
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
