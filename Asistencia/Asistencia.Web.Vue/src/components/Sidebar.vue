<template>
    <aside class="aside-container">
        <!-- START Sidebar (left)-->
        <div class="aside-inner">
            <nav class="sidebar" data-sidebar-anyclick-close="">
                <!-- START sidebar nav-->
                <ul class="sidebar-nav">
                    <!-- START user info-->
                    <li class="has-user-block">
                        <b-collapse :visible="showUserBlock" id="user-block">
                            <div class="item user-block">
                                <!-- User picture-->
                                <div class="user-block-picture">
                                    <div class="user-block-status">
                                        <img class="img-thumbnail rounded-circle" src="img/user/01.jpg" alt="Avatar" width="60" height="60">
                                        <div class="circle bg-success circle-lg"></div>
                                    </div>
                                </div>
                                <!-- Name and Job-->
                                <div class="user-block-info">
                                    <span class="user-block-name">{{objUsuario.nom_user}}</span>
                                    <!-- <span class="user-block-role">Designer</span> -->
                                </div>
                            </div>
                        </b-collapse>
                    </li>
                    <!-- END user info-->
                    <!-- Iterates over all sidebar items-->
                    <template v-for="item in Menu">
                        <!-- Heading -->
                        <li class="nav-heading" v-if="item.heading">
                            <span>{{item.heading}}</span>
                        </li>
                        <!-- Single Menu -->
                        <router-link tag="li" :to="item.path" active-class="active" v-if="!item.heading && !item.submenu">
                            <a :title="tr(item.translate, item.name)">
                                <span v-if="item.label" :class="'float-right badge badge-'+item.label.color">{{item.label.value}}</span>
                                <em :class="item.icon"></em>
                                <span>{{tr(item.translate, item.name)}}</span>
                            </a>
                        </router-link>
                        <!-- Menu With Subitems -->
                        <li :class="routeActiveClass(getSubRoutes(item))" v-if="!item.heading && item.submenu">
                            <a :title="tr(item.translate, item.name)" @click.prevent="toggleItemCollapse(item.name)" href>
                                <span v-if="item.label" :class="'float-right badge badge-'+item.label.color">{{item.label.value}}</span>
                                <em :class="item.icon"></em>
                                <span>{{tr(item.translate, item.name)}}</span>
                            </a>
                            <b-collapse tag="ul" class="sidebar-nav sidebar-subnav" id="item.name" v-model="collapse[item.name]">
                                <li class="sidebar-subnav-header">{{tr(item.translate, item.name)}}</li>
                                <template v-for="sitem in item.submenu">
                                    <router-link tag="li" :to="sitem.path" active-class="active">
                                        <a :title="tr(sitem.translate, sitem.name)">
                                            <span v-if="sitem.label" :class="'float-right badge badge-'+sitem.label.color">{{sitem.label.value}}</span>
                                            <span>{{tr(sitem.translate, sitem.name)}}</span>
                                        </a>
                                    </router-link>
                                </template>
                            </b-collapse>
                        </li>
                    </template>
                </ul>
                <!-- END sidebar nav-->
            </nav>
        </div>
        <!-- END Sidebar (left)-->
    </aside>
</template>

<script>

    import { mapState } from 'vuex';
    import SidebarRun from './Sidebar.run.js';
    import Menu from '../../menu.js';

    import functions from "@/utility/functions";

    export default {
        name: 'Sidebar',
        data() {
            return {
                Menu,
                collapse: this.buildCollapseList(),
                objUsuario:[],
            }
        },
        created(){
            this.getUser();
        },
        mounted() {
            SidebarRun(this.$router, this.closeSidebar.bind(this))
        },
        computed: {
            ...mapState({
                showUserBlock: state => state.setting.showUserBlock
            })
        },
        watch:{
            $route (to, from){
                this.closeSidebar()
            }
        },
        methods: {
            closeSidebar() {
                this.$store.commit('changeSetting', { name: 'asideToggled', value: false })
            },
            buildCollapseList() {
                /** prepare initial state of collapse menus. Doesnt allow same route names */
                let collapse = {};
                Menu
                    .filter(({heading}) => !heading)
                    .forEach(({name, path, submenu}) => {
                        collapse[name] = this.isRouteActive(submenu ? submenu.map(({path})=>path) : path)
                    })
                return collapse;
            },
            getSubRoutes(item) {
                return item.submenu.map(({path}) => path)
            },
            // translate a key or return default values
            tr (key, defaultValue) {
                // return key ? this.$t(key, {defaultValue: defaultValue}) : defaultValue;
                return key ? defaultValue : defaultValue;
            },
            isRouteActive(paths) {
                paths = Array.isArray(paths) ? paths : [paths];
                return paths.some(p => this.$route.path.indexOf(p) > -1)
            },
            routeActiveClass(paths) {
                return { 'active': this.isRouteActive(paths) }
            },
            toggleItemCollapse(collapseName) {
                for (let c in this.collapse) {
                    if (this.collapse[c] === true && c !== collapseName)
                        this.collapse[c] = false
                }
                this.collapse[collapseName] = !this.collapse[collapseName]
            },
            getUser(){
                let _this = this;
                _this.objUsuario = functions.getUserData().usuario;
                console.log(_this.objUsuario);
            }

        }
    }
</script>