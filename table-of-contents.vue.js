const TableOfContents = {
  name: 'TableOfContents',
  template: `
  <div>
    <ul>
      <template v-for="(heading, index) in headings" :key="heading.id">
        <!-- Added: Check if it's the first item or if the current level is the same as the previous one -->
        <template v-if="index === 0 || heading.level === headings[index - 1].level">
          <li>
            <a :href="'#' + heading.id" @click="scrollToHeading(heading)">{{ heading.title }}</a>
          </li>
        </template>
        <!-- Removed: <template v-else> -->

        <!-- Added: Check if the current level is greater than the previous one -->
        <template v-else-if="heading.level > headings[index - 1].level">
          <ul>
            <li>
              <a :href="'#' + heading.id" @click="scrollToHeading(heading)">{{ heading.title }}</a>
            </li>
        </template>
        <!-- Removed: <template v-else> -->

        <!-- Added: Loop to close unnecessary <ul> tags -->
        <template v-else>
          <template v-for="let i = 0; i < headings[index - 1].level - heading.level; i++">
            <!-- Removed: </ul> -->
          </template>
          <li>
            <a :href="'#' + heading.id" @click="scrollToHeading(heading)">{{ heading.title }}</a>
          </li>
        </template>
        <!-- Removed: </template> -->
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