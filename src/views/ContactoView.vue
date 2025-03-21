<template>
    <v-container class="contacto-view" fluid>
        <v-row justify="center">
            <v-col cols="12" md="8">
                <v-card>
                    <v-card-title class="text-h5">Contacto</v-card-title>
                    <v-card-text>
                        <v-list dense>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Nombre:</v-list-item-title>
                                    <v-list-item-subtitle>Aldo Eduardo Valdez Gutierrez</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Correo Electrónico:</v-list-item-title>
                                    <v-list-item-subtitle>
                                        <a href="mailto:avaldez0@ucol.mx">avaldez0@ucol.mx</a>
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle>
                                        <a href="mailto:trabajo@avaldez0.com">trabajo@avaldez0.com</a>
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Teléfono:</v-list-item-title>
                                    <v-list-item-subtitle>312 595 9016</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Dirección:</v-list-item-title>
                                    <v-list-item-subtitle>Colima, Mexico </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "ContactoView",
};
</script>

<style scoped>
.contacto-view {
    padding: 20px;
}
</style>