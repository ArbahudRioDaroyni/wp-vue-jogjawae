const ChildHeadings = {
  name: 'ChildHeadings',
  template: `
    <ul>
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
