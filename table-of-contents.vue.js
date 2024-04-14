const TableOfContents = {
  name: 'TableOfContents',
  template: `
  <div>
    <ul>
      <template v-for="(heading, index) in headings" :key="heading.id">
        <template v-if="index === 0 || heading.level === headings[index - 1].level">
          <li>
            <a :href="'#' + heading.id" @click="scrollToHeading(heading)">{{ heading.title }}</a>
          </li>
        </template>

        <template v-else-if="heading.level > headings[index - 1].level">
          <ul>
            <li>
              <a :href="'#' + heading.id" @click="scrollToHeading(heading)">{{ heading.title }}</a>
            </li>
        </template>

        <template v-else>
          <!-- Close unnecessary <ul> tags -->
          <li>
            <a :href="'#' + heading.id" @click="scrollToHeading(heading)">{{ heading.title }}</a>
          </li>
          <!-- Close the <ul> tag -->
          </ul>
        </template>
      </template>
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