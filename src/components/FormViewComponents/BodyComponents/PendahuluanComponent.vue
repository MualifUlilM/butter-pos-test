<template>
  <section
    id="pendahuluan"
    class="flex flex-col text-sm md:text-base gap-3 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg"
  >
    <div class="text-lg md:text-xl font-bold">{{ $t('message.pendahuluan_1') }}</div>
    <div>{{ $t('message.pendahuluan_2') }}</div>
    <ol class="list-decimal list-outside pl-5 [&>li::marker]:font-bold">
      <li>
        <span class="font-bold">PT Manhattan Slice Indonesia</span>
        {{ $t('message.pendahuluan_3') }}
      </li>
      <li>
        <span class="font-bold">{{ $t('message.pendahuluan_4') }}</span
        >{{ $t('message.pendahuluan_5') }}
      </li>
    </ol>
    <div>{{ $t('message.pendahuluan_6') }}</div>
    <div>
      <span class="font-bold">{{ $t('message.pendahuluan_7') }}</span>
      {{ $t('message.pendahuluan_8') }}
    </div>
  </section>
</template>
