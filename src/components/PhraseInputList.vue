<template>
    <v-row justify="center" class="pr-6 ml-n6" no-gutters>
        <v-col v-for="(value, i) in props.modelValue" :key="i" cols="6" class=" d-flex align-center">
            <p class="text-h6 input-index text-right">{{ i + 1 }}.</p>
            <v-text-field density="compact" :model-value="value" @update:model-value="(value) => onChange(value, i)"
                :type="showPassword ? 'text' : 'password'" :rules="rules"
                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="showPassword = !showPassword"></v-text-field>
        </v-col>
    </v-row>
</template>
<script setup lang='ts'>
import { ref } from 'vue';

// const props = defineProps<{ 'model-value': string[] }>()
const props = defineProps<{ 'modelValue': string[] }>()
const emit = defineEmits<{
    (e: 'update:modelValue', data: string[]): void
}>()
const rules = [
    (value: string) => !!value || 'phrase is required'
]
const showPassword = ref(false)
const onChange = (value: string, i: number) => {
    const values = [...props['modelValue']]
    values.splice(i, 1, value)
    console.log(values)
    emit('update:modelValue', values)
}
</script>
<style lang='scss'>
.input-index {
    flex-basis: 70px;
    padding-right: 6px;
    padding-bottom: 22px;
}
</style>