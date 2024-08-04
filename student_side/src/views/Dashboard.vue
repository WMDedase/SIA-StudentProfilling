<script setup>
import { ref, onMounted } from 'vue';
import { fetchCurrentUser } from '../services/api';

const currentUser = ref(null);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetchCurrentUser();
    console.log('API response:', response); // Log the entire response object

    console.log(response.student_profile);
    currentUser.value = response.student_profile;
    if (response.student_profile && response.student_profile.length > 0) {
    //   currentUser.value = response.student[0];
      console.log('Current user data:', currentUser.value); // Log the current user data
    } else {
      error.value = 'No student data found';
    }
  } catch (err) {
    error.value = 'Failed to fetch current user';
    console.error('Error:', err); // Log any error that occurs
  } finally {
    loading.value = false;
  }
});
</script>

<template>
    <main>

        <div class="top-container">
            <h1 class="bg-title">DASHBOARD</h1>
            <div class="studentProfile">
                <span class="material-icons">grid_view</span>
                <span class="text fw-bolder">Dashboard</span>   
            </div>    
        </div> 
        <hr>

        <div class="bottom-container">
        <div class="left-container">
            <div class="top-left">
                <h3><span class="material-icons">pending_actions</span>Clearance Status Overview</h3>
                <table class="table table-bordered">
                  <thead class="table-label">
                    <tr>
                      <th>Clearance</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-if="currentUser">
                      <td >Guidance</td>
                      <td :style="{ color: statusColor }">{{ guidanceStatus }}</td>
                    </tr>
                    <tr v-if="currentUser">
                      <td>Library</td>
                      <td :style="{ color: statusColor }">{{ libraryStatus }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
                
            <div class="bottom-left">
                <h3><span class="material-icons">info</span>Status Description</h3>
                <table class="table table-striped">
                    <thead>
                      <tr>
                        <th >Cleareance Status</th>
                        <th >Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style="color: green;" class="fw-bold">Cleared</td>
                        <td>All requirements have been successfully fulfilled, and the clearance process is complete.</td>
                    </tr>
                      <tr>
                        <td style="color: #dbc501;" class="fw-bold">Not Cleared</td>
                        <td>The clearance process is ongoing. Approval or completion of remaining tasks is required. Students need to address these by accessing respective tabs to view and fulfill the necessary requirements.</td>                    </tr>
                    </tbody>
                  </table>
                </div>
        </div>
        
        <div class="right-container" > 
          <div class="vmg">
          <h4>St. Nicholas Academy of Castillejos</h4>
          <h5>MISSION - VISION - GOALS</h5>
          
            <VMG></VMG>
          <!-- <div class="vision">
              <h5>VISION</h5>
              <h6>St. Nicholas Academy of Castillejos, Inc., envisions a Christ centered,
                dynamic, and effective community that adheres to Catholic philosophy of
                education and national development goals.</h6>
          </div>

          <div class="mission">
              <h5>MISSION</h5>
              <h6>
              <p>To promote the continuing growth of the spiritual, professional, and personal life among members of our school's academic community.</p>
              <p>To ensure in our school the development of self-directed and responsible Catholic students who are academically and vocationally equipped and ready to serve others;</p>
              <p>To promote curricular programs that respond to poverty alleviation, justice and peace, environment stewardship and responsible citizenship.</p>
              <p>To achieve quality and excellent education, deliver responsive and relevant educational services, promote access of education and equity of educational opportunities among different types of students.</p>
              <p>To achieve efficient and effective school governance practices;</p>
              <p>To ascertain the institutionalization of religion as the core of the curriculum in our school; and</p>
              <p>To promote a culture of communion among the members of the academic community in our school.</p>
            </h6>
          </div>

          <div class="goals">
              <h5>GOALS</h5>
              <h6>
                <p>To ensure the ACSDI Vision, Mission & Goals serve as norm for our school's operation such that academic policies and programs have to operate in the context of the said Vision, and Goals.</p>
                <p>To enhance religion as the core of the curriculum geared towards a holistic Christian formation.</p>
                <p>To coordinate the provision of curricular programs that meet the demands of ACSDI Vision - Mission of Christian formation, academic excellence and relevance to national development goals.</p>
                <p>To ensure our school provides and promotes holistic approach for student affairs and services and promotes access to quality, relevant. Efficient and effective student services programs.</p>
                <p>To nurture and develop a Christ-centered research culture in our school and provide an avenue for the development of social relation that has a liberating effect on the amelioration of the immediate community partners.</p>
                <p>To provide opportunities for professional, spiritual and personal growth and development of our school's personnel.</p>
                <p>To establish an effective financial management system in our school to support and facilitate the realization of the School Vision, Mission and Goals.</p>
                <p>To ensure that our school is managed efficiently and effectively.</p>
                <p>To ensure that our school makes effective use of information and communication technology and learning resources to support student learning and management for academic affairs.</p>
              </h6>
          </div> -->
        </div>

      </div>
    </div>
    </main>
</template>

<script>
import DocxRequestForm from '../components/DocxRequestForm.vue';
import VMG from '../components/VMG.vue';
export default {
    components: {
      DocxRequestForm,
      VMG 
    },
    data (){
    return {
    };
  },
  methods: {

  },
  computed: {
    guidanceStatus() {
      return this.currentUser?.guidance?.status || 'Not Cleared';
    },
    libraryStatus() {
      return this.currentUser?.library?.status || 'Not Cleared';
    },
    statusColor() {
      switch (this.guidanceStatus,this.libraryStatus) {
        case 'Cleared':
          return 'green';
        case 'Not Cleared':
          return '#dbc501'; // Yellow color
        default:
          return 'gray'; // Default color for unknown statuses
      }
    }
  }
};
</script>

<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: column;
}

.top-container{
    display: flex;
    margin: 0.5rem;

    .bg-title{
        z-index: -1;
        position: absolute;
        opacity: 10%;
        margin-top: -40px;
        font-size: 100px;
        font-family: Impact, fantasy;
    }
    .studentProfile{
        flex: 1;

        .material-icons{
            position: relative;
            color: var(--dark);
            font-size: 2rem;
            top: 4px;
        }
        .text{
            position: relative;
            color: var(--dark);
            font-size: 2.5rem;
            font-weight: 900;
            bottom: 0.1rem;
            left: 0.2rem;   
            text-shadow: 0 1px 1px;

        }
    }

} 
.bottom-container{
    display: flex;
  
    .left-container{
        flex: 0.5;
        margin-right: 1rem;
        margin-bottom: 2em;
        .top-left{
            padding: 1rem;
            margin-bottom: 2rem;
            color: var(--dark);
            border-radius: 5px;
            border-left: 4px solid var(--dark-alt);
            box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
            
            h3 {
                text-shadow: 0 0 1px;
                font-size: 20px;
                position:relative;
                bottom: 15px;
            }
            .material-icons{
                position:relative;
                font-size: 35px;
                top: 12px;
                right: 2px;
            }
            table{
                box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px;
                border: 0.5px solid rgb(228, 228, 228);
                width: 100%;
            }
    
            th{
                color: var(--dark);
                font-size: 20px;
                text-align: center;
                text-shadow: 0 0 1px;
            }
    
            td{
                color: var(--dark);
                font-weight: 600;
                padding: 0.6rem;
                text-align: center;
            }
    
        }
        .bottom-left{
            padding: 1rem;
            color: var(--dark);
            border-radius: 5px;
            border-left: 4px solid var(--dark-alt);
            box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
            font-size: 20px;
            h3 {
                text-shadow: 0 0 1px;
                font-size: 20px;
                position:relative;
                bottom: 15px;
            }
            .material-icons{
                position:relative;
                font-size: 35px;
                top: 12px;
                right: 2px;
            }
    
            th{
                color: #5c5c5c;
                font-size: 16px;
            }
    
            td{
                font-size: 16px;
            }
        }
    }
    
    .right-container{
        flex: 0.6;
        margin-bottom: 1rem;

            .vmg{
              display: flex;
              flex-direction: column;
              gap: 1rem;
              box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
              padding: 1rem;
              border-right: 4px solid var(--dark-alt);
              border-radius: 5px;

              h4{
                text-align: center;
                color: var(--dark);
                font-weight: 900;
                text-transform: uppercase;
                text-shadow: 0 0 1px;
              }
      
              h5{
                text-align: center;
                color: var(--dark);
                font-weight: 900;
              }
            .vision{
              box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
              padding: 1.5rem;
              border-radius: 10px;

              h5{
                text-align: center;
                color: var(--dark);
                font-weight: 900;
                text-shadow: 0 0 1px;
              }
              h6{
                line-height: 1.3;
                padding: 0.5rem;
              }

            }

            .mission{
              box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
              padding: 1.5rem;
              border-radius: 10px;

              h5{
                text-align: center;
                color: var(--dark);
                font-weight: 900;
                text-shadow: 0 0 1px;
              }
              h6{
                line-height: 1.3;
                padding: 0.5rem;
              }
            }

            .goals{
              box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
              padding: 1.5rem;
              border-radius: 10px;

              h5{
                text-align: center;
                color: var(--dark);
                font-weight: 900;
                text-shadow: 0 0 1px;
              }

              h6{
                line-height: 1.3;
                padding: 0.5rem;

              }
            }
          }
}
}
</style>