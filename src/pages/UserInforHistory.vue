<template>
  <div
    class="w-screen h-screen bg-gradient-to-r from-yellow-200 via-green-400 to-purple-400">
    <section class="w-screen h-screen">
      <span class="flex justify-center items-end">
        <spam
          class="mb-4 mr-4 font-semibold text-[18px] text-blue-800 underline">
          Hello: {{ userName }}</spam
        >
        <button
          class="w-32 h-10 border-2 rounded-xl mr-5 animate-pulse duration-500 bg-gradient-to-r from-green-200 via-orange-300 to-transparent hover:ring-4 ring-purple-600 mt-10 shadow-2xl mb-4"
          @click="backAppointment">
          <p class="text-[12px] hover:text-blue-800 text-fuchsia-600 underline">
            Back
          </p>
        </button>
      </span>
      <span class="w-{100px} h-[600px] border flex shadow-xl bg-gray-200">
        <div
          class="w-[50%] h-full border-2 border-spacing-10 border-white text-center pt-4">
          Customer Information
          <div class="w-auto h-auto p-4 m-4 grid gap-y-4">
            <span class="flex gap-4">
              <label for="name" class="w-[100px]">Name</label>
              <input
                type="text"
                class="name rounded-md bg-purple-300 shadow-input"
                :disabled="isChange"
                v-model="nameOfUser" />
            </span>
            <span class="flex gap-4">
              <label for="name" class="w-[100px]">Age</label>
              <input
                type="number"
                class="name rounded-md bg-purple-300 shadow-input"
                :disabled="isChange"
                v-model="ageOfUser" />
            </span>
            <span class="flex gap-4">
              <label for="name" class="w-[100px]">Adress</label>
              <input
                type="text"
                class="name rounded-md bg-purple-300 shadow-input"
                :disabled="isChange"
                v-model="addressOfUser" />
            </span>
            <span class="flex gap-4">
              <label for="name" class="w-[100px]">Email</label>
              <input
                type="text"
                class="name rounded-md bg-purple-300 shadow-input"
                :disabled="isChange"
                v-model="emailOfUser" />
            </span>
            <span class="flex gap-4">
              <label for="name" class="w-[100px]">Phone</label>
              <input
                type="number"
                class="name rounded-md bg-purple-300 shadow-input"
                :disabled="isChange"
                v-model="phoneOfUser" />
            </span>
            <spam class="mr-16 mt-4">
              <button
                class="w-32 h-10 border-2 rounded-xl mr-5 animate-bounce duration-500 bg-gradient-to-r from-green-200 via-orange-300 to-yellow-400 hover:ring-4 ring-purple-300 shadow-xl">
                <p
                  class="text-[12px] w-full hover:text-blue-800 text-fuchsia-600 underline"
                  @click="editInformation">
                  edit
                </p></button
              ><button
                class="w-32 h-10 border-2 rounded-xl mr-5 animate-bounce duration-500 bg-gradient-to-r from-green-200 via-orange-300 to-red-300 hover:ring-4 ring-purple-300 shadow-xl"
                @click="changeInformation">
                <p
                  class="w-full text-[12px] hover:text-blue-800 text-fuchsia-600 underline">
                  Submit
                </p>
              </button>
            </spam>
          </div>
        </div>
        <div
          class="w-[50%] h-full border-2 border-spacing-10 border-white text-center pt-4 flex flex-col items-center gap-y-4 overflow-auto">
          <p>Appointment History</p>
          <div>
            <span
              v-for="value in appointmentList"
              :key="value.appointKey"
              class="h-auto w-auto border-6 border-gray-600 flex flex-col justify-center items-start p-4">
              <label class="underline text-blue-400"
                >Appointment Name:
                <span class="text-yellow-800">{{ value.title }}</span></label
              >
              <label class="underline text-blue-400"
                >Appointment Content:
                <span class="text-yellow-800">{{ value.content }}</span></label
              >
              <label class="underline text-blue-400"
                >Appointment Date&time:
                <span class="text-yellow-800">{{ value.time }}</span></label
              >
              <span class="flex gap-x-4 p-4 justify-center items-center ml-32">
                <button
                  class="border w-20 h-10 border-red-300 rounded-lg bg-gradient-to-r from-blue-400 via-slate-50 to-yellow-200 shadow-lg ring-4 hover:shadow-input hover:ring-green-400"
                  @click="deleteAppointment(value.appointKey)">
                  Delete
                </button>
              </span>
            </span>
          </div>
        </div>
      </span>
    </section>
  </div>
</template>
<script>
export default {
  name: "UserInfor&HistoryAppointment",
  data() {
    return {
      isChange: true,
      appointmentList: [],
      nameOfUser: "",
      ageOfUser: "",
      addressOfUser: "",
      emailOfUser: "",
      phoneOfUser: "",
    };
  },
  methods: {
    backAppointment() {
      this.$router.replace({ path: "./makeappointment" });
    },
    changeInformation() {
      fetch(
        `https://appointment-management-381708-default-rtdb.firebaseio.com/userInfor/${this.keySecurity}.json`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.nameOfUser,
            age: this.ageOfUser,
            adress: this.addressOfUser,
            email_adress: this.emailOfUser,
            phone_number: this.phoneOfUser,
          }),
        }
      )
        .then((response) => {
          if (!response.ok) {
            alert("Update unsuccessful");
          } else {
            alert("Update successful");
            this.isChange = true;
            response.json();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editInformation() {
      this.isChange = false;
    },
    getUserInfor() {
      fetch("https://appointment-management-381708-default-rtdb.firebaseio.com/userInfor.json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          for (var key in data) {
            if (key === this.keySecurity) {
              this.nameOfUser = data[key].name;
              this.ageOfUser = data[key].age;
              this.addressOfUser = data[key].adress;
              this.emailOfUser = data[key].email_adress;
              this.phoneOfUser = data[key].phone_number;
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getAppointmentforUser() {
      fetch("https://appointment-management-381708-default-rtdb.firebaseio.com/appointmentInfor.json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          for (var key in data) {
            if (data[key].Userkey === this.keySecurity) {
              const appointment = {
                title: data[key].AppointmentTitle,
                content: data[key].AppointmentContent,
                time: data[key].day + " " + data[key].time,
                appointKey: key,
              };
              this.appointmentList.push(appointment);
            }
          }
        })
        .catch((error) => {
          throw new Error(error);
        });
    },
    deleteAppointment(key) {
      fetch(
        `https://appointment-management-381708-default-rtdb.firebaseio.com/appointmentInfor/${key}.json`,
        {
          method: "DELETE",
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to delete data.");
          }
          return response.json();
        })
        .then(() => {
          this.appointmentList = [];
          this.getAppointmentforUser();
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  computed: {
    userName() {
      return this.$store.getters.getUserName;
    },
    keySecurity() {
      return this.$store.getters.getKey;
    },
  },
  mounted() {
    this.getUserInfor();
    this.getAppointmentforUser();
  },
};
</script>
