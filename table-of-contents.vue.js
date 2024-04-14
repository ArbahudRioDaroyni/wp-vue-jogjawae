const TableOfContents = {
  name: 'TableOfContents',
  template: `
  <div>
    <template v-for="(heading, index) in headings" :key="heading.id">
      <template v-if="index === 0 || heading.level > headings[index - 1].level">
        <ul>
          <li>
            <a :href="'#' + heading.id" @click="scrollToHeading(heading)">
              {{ heading.title }}
            </a>
          </li>
        </ul>
      </template>
      <template v-else>
        <li>
          <a :href="'#' + heading.id" @click="scrollToHeading(heading)">
            {{ heading.title }}
          </a>
        </li>
      </template>
    </template>
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