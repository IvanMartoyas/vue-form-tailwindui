<template>
    <div class="popUp" v-if="openForm" @click.prevent="close_form($event.target.className)">
        <div class="overflow-hidden bg-white  rounded py-2 px-4">
            <h3 class="text-3xl text-gray-900 px-4 pb-5 sm:p-6">Заказать звонок</h3>
            
            <form class="px-4 py-5 form">


                    <div class="grid grid-cols-12 gap-6">

                        <div class="form__name col-span-12 sm:col-span-4 md:col-span-3 lg:col-span-3">
                            <label for="first-name" class="block text-sm font-medium text-gray-700">Имя*</label>
                            <input :class="{'border-rose-600': $v.name.$dirty && !$v.name.minLength || $v.name.$dirty && !$v.name.required }" type="text" v-model.lazy="$v.name.$model"  name="first-name" id="first-name" class=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Иван Иванов"/>
                            
                            <small class="bg-red-500/75 px-4 py-2 mt-4 flow-root text-white" v-if="$v.name.$dirty && !$v.name.minLength">Имя дожно быть больше 2 букв</small>
                            <small class="bg-red-500/75 px-4 py-2 mt-4 flow-root text-white" v-else-if="$v.name.$dirty && !$v.name.required">Укажите ваше имя</small>
                        </div>

                        <div class="form__phone col-span-12 sm:col-span-4 md:col-span-3 lg:col-span-3">
                            <label for="phone" class="tel block text-sm font-medium text-gray-700">Телефон*</label>
                                            
                            <input type="text" 
                                placeholder ="+7 (___) ___-__-__"
                                v-mask="'+7(###)-###-##-##'"
                                v-model="phone"

                                class = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"

                                :class = "{'border-rose-600': $v.phone.$dirty && !$v.phone.required}" 
                                id="phone"  
                                v-model.lazy="$v.phone.$model" 
                                
                            />

                            <small class="bg-red-500/75 px-4 py-2 mt-4 flow-root text-white" v-if="$v.phone.$dirty && !$v.phone.required">Укажите номер телефна</small>
                        </div>

                        <div class="form__email col-span-12 sm:col-span-4 md:col-span-3 lg:col-span-3">
                            <label for="emailaddress" class="block text-sm font-medium text-gray-700">Email*</label>
                            <input :class="{'border-rose-600': $v.mail.$dirty && !$v.mail.email || $v.mail.$dirty && !$v.mail.required}" type="text" name="email-address" v-model.lazy="$v.mail.$model"  id="email-address"  class=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="you@example.com" />
                            
                            <small class="bg-red-500/75 px-4 py-2 mt-4 flow-root text-white" v-if="$v.mail.$dirty && !$v.mail.email">Неверная почта</small>
                            <small class="bg-red-500/75 px-4 py-2 mt-4 flow-root text-white" v-if="$v.mail.$dirty && !$v.mail.required">Укажите почту</small>
                        </div>       
                        
                        <div class="form__city col-span-12 sm:col-span-8 md:col-span-3 lg:col-span-3">
                            <label for="country" class="block text-sm font-medium text-gray-700">Город*</label>
                            <select id="country" name="syti" v-model="selected" autocomplete="country-name" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                <option v-for="sity in citys" :key="sity.id">{{sity.name}}</option>
                            </select>
                        </div>

                        <div class="flex flex-nowrap items-end col-span-12 md:col-start-10 md:col-end-13 lg:col-start-10 lg:col-end-13 sm:col-span-4 md:col-span-3  lg:col-span-3  bg-white text-right ">
                            <button type="submit" @click="send" class="w-full rounded-md border border-transparent bg-success py-2 px-4 font-medium text-white shadow-sm focus:outline-none focus:ring-2">Отправить</button>
                        </div>

                    </div>             
            </form>
        </div>
    </div>
</template>

<script>
    import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

    export default {
        name: 'Button_form',
        data() {
            return {
                citys: [],
                selected: "",
                name: "",
                phone: "",
                mail: "",
            }
        },
        validations: {
            name: {
                required,
                minLength: minLength(2)
            },
            phone: {
                required,
            },
            mail: {
                required,
                email
            }
        },
        methods: {
            send() {
                
                console.log("send")
                

                if(this.$v.$invalid) {
                    this.$v.$touch();
                    return    
                }
                else {

                    // достаёт id города
                    let this_for_select = this;
                    var cityId = this.citys.filter(function(val) {
                        if( val.name == this_for_select.selected ) {
                            return val.id;   
                        } else return
                    })[0].id

                    let data = {
                        name: this.name,
                        phone: "+"+this.phone.replace(/[^0-9]/g, ''),
                        mail: this.mail,
                        citys_id: cityId
                    }
                    
                    this.$store.dispatch('set_form_data', data);
                    this.$store.dispatch('send__form');
                    this.$store.dispatch("set_form_open", {open: false})

                    this.name = "";
                    this.phone = "";
                    this.mail = "";

                }
            },
            close_form(class_name) {

                if(class_name == 'popUp') {
        
                    this.$store.dispatch("set_form_open", {open: false})
                }
            },
           
        },
        mounted() {
    
            let formData = this.$store.getters.get_form_data;

                this.citys = formData.citys;
                this.name = formData.name;
                this.phone = formData.phone;
                this.mail = formData.mail;
                this.selected = this.$store.getters.get_form_data.selected;  

          
        },  
        computed: {
            openForm() {
                return this.$store.getters.get_form_open;
            },
        }
    }
</script>
<style>
    .popUp {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    
        background: #6b7280a6;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 768px) {
        .form__phone { 
            grid-column: 1 / 5;
            grid-row: 1 / 1;
        }
    }
</style>