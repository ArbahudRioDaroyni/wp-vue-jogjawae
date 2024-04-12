const TableOfContents = {
  name: 'TableOfContents',
  template: `
  <div class="table-of-contents">
    <ul>
      <template v-for="heading in headings" :key="heading.id">
        <template v-if="heading.level === 1">
          <li>
            <a :href="'#' + heading.id" @click="scrollToHeading(heading)">
              {{ heading.title }}
            </a>
            <ul>
              <template v-for="subHeading in headings" :key="subHeading.id">
                <template v-if="subHeading.parentId === heading.id && subHeading.level === 2">
                  <li>
                    <a :href="'#' + subHeading.id" @click="scrollToHeading(subHeading)">
                      {{ subHeading.title }}
                    </a>
                    <ul>
                      <template v-for="subSubHeading in headings" :key="subSubHeading.id">
                        <template v-if="subSubHeading.parentId === subHeading.id && subSubHeading.level === 3">
                          <li>
                            <a :href="'#' + subSubHeading.id" @click="scrollToHeading(subSubHeading)">
                              {{ subSubHeading.title }}
                            </a>
                            <!-- Repeat for subSubSubHeading, subSubSubSubHeading, etc. -->
                          </li>
                        </template>
                      </template>
                    </ul>
                  </li>
                </template>
              </template>
            </ul>
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