<template>
  <ContentWrapper>
         <div class="content-heading">
            <div>
                <small>REGISTRO DE CONFIGURACION DE SUCURSAL</small>
            </div>
        </div>
        <div class="container-fluid">
            <SucursalConfiguracionList />
        </div>
  </ContentWrapper>
</template>

<script>

import SucursalConfiguracionList from './SucursalConfiguracionList';
export default {
  name: "SucursalConfiguracion",
  components: {
      SucursalConfiguracionList
  },
  data() {
    return {
      value: 0,
    };
  },
};
</script>
