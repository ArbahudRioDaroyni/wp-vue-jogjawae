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
          <template v-for="let i = 0; i < heading.level - headings[index - 1].level; i++">
            <ul>
            </ul>
          </template>
          <li>
            <a :href="'#' + heading.id" @click="scrollToHeading(heading)">{{ heading.title }}</a>
          </li>
        </template>
        <template v-else>
          <template v-for="let i = 0; i < headings[index - 1].level - heading.level; i++">
            <ul>
            </ul>
          </template>
          <li>
            <a :href="'#' + heading.id" @click="scrollToHeading(heading)">{{ heading.title }}</a>
          </li>
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