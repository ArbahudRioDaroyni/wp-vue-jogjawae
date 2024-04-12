const TableOfContents = {
  name: 'TableOfContents',
  template: `
  <div class="table-of-contents">
    <ul>
      <li v-for="heading in headings" :key="heading.id">
        <a :href="'#' + heading.id" @click="scrollToHeading(heading)">
          {{ heading.title }}
        </a>
      </li>
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