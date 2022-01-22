<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="usersList"
      class="elevation-1 mt-5"
      hide-default-footer
    >
      <template v-slot:[`item.name`]="{ item }">
        <v-chip :text-color="getColor(item.status)" class="v-chip-color">
          {{ item.name }}
        </v-chip>
      </template>
    </v-data-table>
    <!-- Attrs -->
    <div>
      <Attrs id="new-attrs" />
    </div>
  </div>
</template>

<script>
import Attrs from '../components/Attrs.vue'
export default {
  name: "Home",
  components: {
    Attrs,
  },
  data() {
    return {
      usersList: [
        { status: 1, name: "AaJu", id: 1 },
        { status: 1, name: "Baju", id: 2 },
        { status: 3, name: "Kaju", id: 3 },
        { status: 2, name: "Lol", id: 4 },
        { status: 2, name: "Marji", id: 5 },
        { status: 3, name: "Sky", id: 6 },
        { status: 4, name: "Marina", id: 7 },
      ],
      result: [],
      headers: [
        {
          text: "status",
          align: "start",
          sortable: false,
          value: "status",
        },
        { text: "name", value: "name" },
      ],
    };
  },
  mounted() {
    //  var dataArr = this.usersList.map((item) => [item.status,item]);
    //  var maparr = new Map(dataArr);
    //  var tempResult = [...maparr.values()];
    //  this.result.push(tempResult);
  },
  methods: {
    // getUniqueStatus: function() {
    //   return this.unique = this.usersList.filter((val, index, arr) => arr.indexOf(val.status) === index);
    // },
    getColor(status) {
      if (status == 1) return "red";
      else if (status == 2) return "green";
      else if (status == 3) return "yellow";
      else return "gray";
    },
  },
};
</script>
<style scoped>
</style>
