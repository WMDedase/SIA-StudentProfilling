<template>
    <v-window v-model="activeSlide" show-arrows style="box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 8px; border-radius:5px" >
      <v-window-item v-for="(item, index) in items" :key="index" >
        <v-card class="pa-14 pt-5"  >
          <h5 class="text-center" style="color:var(--dark); text-shadow: 0 0 1px;font-weight: 900;">{{ item.title }}</h5>
          <v-card-text>
            <div v-for="(content, idx) in item.content" :key="idx">
              <p style="font-size:16px; ">{{ content }}</p>
            </div>
          </v-card-text>
        </v-card>
      </v-window-item>
    </v-window>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeSlide: 0,
        items: [
          {
            title: 'VISION',
            content: [
              'St. Nicholas Academy of Castillejos, Inc., envisions a Christ centered, dynamic, and effective community that adheres to Catholic philosophy of education and national development goals.'
            ]
          },
          {
            title: 'MISSION',
            content: [
              'To promote the continuing growth of the spiritual, professional, and personal life among members of our school\'s academic community.',
              'To ensure in our school the development of self-directed and responsible Catholic students who are academically and vocationally equipped and ready to serve others;',
              'To promote curricular programs that respond to poverty alleviation, justice and peace, environment stewardship and responsible citizenship.',
              'To achieve quality and excellent education, deliver responsive and relevant educational services, promote access of education and equity of educational opportunities among different types of students.',
              'To achieve efficient and effective school governance practices;',
              'To ascertain the institutionalization of religion as the core of the curriculum in our school; and',
              'To promote a culture of communion among the members of the academic community in our school.'
            ]
          },
          {
            title: 'GOALS',
            content: [
              'To ensure the ACSDI Vision, Mission & Goals serve as norm for our school\'s operation such that academic policies and programs have to operate in the context of the said Vision, and Goals.',
              'To enhance religion as the core of the curriculum geared towards a holistic Christian formation.',
              'To coordinate the provision of curricular programs that meet the demands of ACSDI Vision - Mission of Christian formation, academic excellence and relevance to national development goals.',
              'To ensure our school provides and promotes holistic approach for student affairs and services and promotes access to quality, relevant. Efficient and effective student services programs.',
              'To nurture and develop a Christ-centered research culture in our school and provide an avenue for the development of social relation that has a liberating effect on the amelioration of the immediate community partners.',
              'To provide opportunities for professional, spiritual and personal growth and development of our school\'s personnel.',
              'To establish an effective financial management system in our school to support and facilitate the realization of the School Vision, Mission and Goals.',
              'To ensure that our school is managed efficiently and effectively.',
              'To ensure that our school makes effective use of information and communication technology and learning resources to support student learning and management for academic affairs.'
            ]
          }
        ]
      }
    },
    methods: {
      nextSlide() {
        this.activeSlide = (this.activeSlide + 1) % this.items.length;
      }
    }
  }
  </script>
  