<template>
    <div class="pointer" @click="onCopy">
        <slot />
    </div>
</template>
<script setup lang='ts'>
import { CopyText } from '@/utils';
import { toast } from '@/utils'

const props = defineProps<{ content: string }>()
const onCopy = () => {
    toast('Copied')
    CopyText(props.content)
}
</script>
<style lang='scss'></style>