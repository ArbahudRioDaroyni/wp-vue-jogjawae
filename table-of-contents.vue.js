const TableOfContents = {
  name: 'TableOfContents',
  template: `
  <div class="table-of-contents">
    <ul>
      <div v-for="heading in headings" :key="heading.id">
        <div v-if="heading.level === 1">
          <li>
            <a :href="'#' + heading.id" @click="scrollToHeading(heading)">
              {{ heading.title }}
            </a>
          </li>
        </div>
      </div>
    </ul>
  </div>
  `,
  props: {
    headings: {
      type: Array,
      required: true
    }
  },
  methods: {
    scrollToHeading(heading) {
      const element = document.getElementById(heading.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
}

export default TableOfContents