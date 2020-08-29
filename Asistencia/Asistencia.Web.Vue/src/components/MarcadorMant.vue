<template>
    <ContentWrapper>
        <div class="content-heading">
            <div>DataTables
                <small>jQuery Datatables plugins using a custom VUE component wrapper.</small>
            </div>
        </div>
        <div class="container-fluid">
            <ListMarcadores />
        </div>

    </ContentWrapper>
</template>

<script>

    import ListMarcadores from './ListaMarcadores';

    export default {
        name: 'MarcadorMant',
        components: {
            ListMarcadores
        },
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
            }
        }
    }
</script>
