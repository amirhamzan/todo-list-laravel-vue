<template>
  <div class="">
    <div class="">
      <Card class="test">
        <template #title> Add Todo List <i class="pi pi-plus"></i></template>
        <template #content>
          <div class="field">
            <label for="firstname1">Fill up your routine!</label>
            <input
              id="firstname1"
              type="text"
              class="
                text-base text-color
                surface-overlay
                p-2
                border-1 border-solid
                surface-border
                border-round
                appearance-none
                outline-none
                focus:border-primary
                w-full
              "
            />
          </div>
          <Button label="Submit" />
        </template>
      </Card>
      <Card class="mt-2">
        <template #title> Recorded List <i class="pi pi-check"></i></template>
      </Card>
    </div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Card from "primevue/card";
import Dialog from "primevue/dialog";

export default {
  components: {
    InputText,
    Button,
    Card,
    Dialog,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
