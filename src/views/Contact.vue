<template>
  <div>
    <h1>This is the contact page</h1>
    <b-button @click="show = !show" variant="primary">Toggle add contact</b-button>
    <!-- TODO: Add Input validation and types -->

    <b-container id="contact-title-page">
      <b-form @submit="addContact" @reset="resetForm" v-if="show">
        <b-row>
          <b-col cols="3"></b-col>
          <b-col>
            <b-form-group
              id="input-contact-name-group"
              label="Name: "
              label-for="input-contact-name"
            >
              <b-form-input
                id="input-contact-name"
                v-model="contact.contactName"
                type="text"
                required
                placeholder="Enter name"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              id="input-contact-nickname-group"
              label="Nickname: "
              label-for="input-contact-nickname"
            >
              <b-form-input
                id="input-contact-nickname"
                v-model="contact.nickname"
                type="text"
                placeholder="Enter nickname"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="3"></b-col>
        </b-row>

        <b-row>
          <b-col cols="3"></b-col>
          <b-col>
            <b-form-group
              id="input-contact-relationship-group"
              label="Relationship: "
              label-for="input-contact-relationship"
            >
              <b-form-input
                id="input-contact-relationship"
                v-model="contact.relationship"
                type="text"
                placeholder="Enter relationship"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              id="input-contact-importance-level-group"
              label="Importance Level: "
              label-for="input-contact-importance-level"
            >
              <b-form-input
                id="input-contact-importance-level"
                v-model="contact.importanceLevel"
                type="text"
                placeholder="Enter importance level"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="3"></b-col>
        </b-row>
        <b-row>
          <b-col cols="4"></b-col>
          <b-col>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-col>

          <b-col cols="4"></b-col>
        </b-row>
      </b-form>
    </b-container>

    <hr />

    <ul class="list-inline" id="contact-information">
      <li class="list-inline-item" v-for="(con, index) in contacts" :key="index">
        <b-card :title="con.contactName" style="width: 15rem; height: 10rem;" class="mb-2">
          <b-card-text>
            Nickname: {{ con.nickname }}
            <br />
            Relationship: {{ con.relationship }}
            <br />
            Importance Level: {{ con.importanceLevel }}
          </b-card-text>
        </b-card>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      show: false,
      contact: {
        contactName: "",
        nickname: "",
        relationship: "",
        importanceLevel: ""
      }
    };
  },
  computed: {
    ...mapGetters(['contacts'])
  },
  methods: {
    addContact(event) {
      event.preventDefault();
      this.$store.dispatch("addContact", this.contact);

    },
    resetForm(event) {
      event.preventDefault();
      this.contact.contactName = "";
      this.contact.nickname = "";
      this.contact.relationship = "";
      this.contact.importanceLevel = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  },
  created() {
    this.$store.dispatch("getContacts");
  }
};
</script>

<style>
</style>