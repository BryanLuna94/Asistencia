<template>
    <ContentWrapper>
        <div class="content-heading">
            <div>
                <small>REGISTRO DE MARCACIONES</small>
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
                      
            }
        }
    }
</script>
