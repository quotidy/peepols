<template>
  <div class="contact">
    <h1>This is the contact page</h1>
    <!-- TODO: Add Input validation and types -->
    <form>
      <input name="contactName" type="text" v-model="contact.contactName" placeholder="contactName" />
      <input name="nickname" type="text" v-model="contact.nickname" placeholder="nickname" />
      <input
        name="relationship"
        type="text"
        v-model="contact.relationship"
        placeholder="relationship"
      />
      <input
        name="importanceLevel"
        type="text"
        v-model="contact.importanceLevel"
        placeholder="importanceLevel"
      />
      <input
        name="birthday"
        type="text"
        v-model="contact.birthday"
        placeholder="birthday"
      />
      <input
        name="telephoneNumber"
        type="text"
        v-model="contact.telephoneNumber"
        placeholder="telephoneNumber"
      />
      <input
        name="emailAddress"
        type="text"
        v-model="contact.emailAddress"
        placeholder="emailAddress"
      />
      <input
        name="location"
        type="text"
        v-model="contact.location"
        placeholder="location"
      />
    </form>
    <button @click="addContact">Add new contact</button>
    <hr />
    <ul id="contact-information">
      <li v-for="contact in contacts" :key="contact">
        Name: {{contact.contactName}}
        <br />
        Nickname: {{ contact.nickname }}
        <br />
        Relationship: {{ contact.relationship }}
        <br />
        Importance Level: {{ contact.importanceLevel }}
        <br />
        Birthday: {{ contact.birthday }}
        <br />
        Telephone Number: {{ contact.telephoneNumber }}
        <br />
        Email Address: {{ contact.emailAddress }}
        <br />
        Location: {{ contact.location }}
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      contact: {
        contactName: "",
        nickname: "",
        relationship: "",
        importanceLevel: "",
        birthday: "",
        telephoneNumber: "",
        emailAddress:"",
        location:""
      }
    };
  },
  computed: {
    ...mapGetters({
      contacts: "contacts"
    })
  },
  methods: {
    addContact() {
      this.$store.dispatch("addContact", this.contact);
    }
  },
  created(){
    this.$store.dispatch("getContacts");
  }
};
</script>

<style>
</style>