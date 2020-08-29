<template>
  

    <div class="card">
      <div class="card-body">
          <table>
            <thead>
                <tr>
                    <th data-priority="1">Engine</th>
                    <th>Browser</th>
                    <th>Platform(s)</th>
                    <th class="sort-numeric">Engine version</th>
                    <th class="sort-alpha" data-priority="2">CSS grade</th>
                </tr>
            </thead>
            <tbody>
                <tr class="gradeX">
                    <td>Trident</td>
                    <td>Internet Explorer 4.0</td>
                    <td>Win 95+</td>
                    <td>4</td>
                    <td>X</td>
                </tr>
            </tbody>

          </table>
          
        <!-- <table class="table-responsive" id="datatable1">
          <thead>
              
                <tr>
                    <th>ACCESS</th>
                </tr>
              
              
          </thead>
          <tbody>
            <paginate name="people" :list="people" :per="2">
              <tr v-for="person in paginated('people')" v-bind:key="person">
                <td>{{ person }}</td>
         
              </tr>

            </paginate>

          </tbody>

        </table> -->
            
            <!-- <paginate-links
              for="people" :classes="{ ul: 'pagination', li: 'page-item', a: 'page-link' }"
              style="cursor:pointer;" 
            ></paginate-links> -->
      </div>
    </div>

</template>
<script>
export default {
  name: "MarcadorList",
  data() {
    return {
      value: 0,
      // list: {
      // 	id: 0,
      // 	emp_codigo: '',
      // 	fecha_hora_marcador:'',
      // 	longitud:0,
      // 	latitud:0,
      // },
      people: [
        "Richard Hendricks",
        "Erlich Bachman",
        "Nelson Bighetti",
        "Bertram Gilfoyle",
        "Dinesh Chugtai",
        "Jared Dunn",
        "Jian-Yang",
      ],
      paginate: ["people"],
    };
  },
};
</script>
