<template>
    <ContentWrapper>
        <div class="content-heading">
            <div>
                <small>REGISTRO DE MARCACIONES</small>
            </div>
        </div>
        <div class="container-fluid">
            <MarcadoresList />
        </div>

    </ContentWrapper>
</template>

<script>

    import MarcadoresList from './MarcadoresList';

    export default {
        name: 'MarcadorMant',
        components: {
            MarcadoresList
        },
        data() {
            return {
                value: 0,
                      
            }
        }
    }
</script>
