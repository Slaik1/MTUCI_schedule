import { TOptions } from '../UIKit/SelectInput/selectInput.model';

import { SettingsItemProps } from './settingsItem';

export const settingsList: SettingsItemProps[] = [
  {
    title: 'Подсвечивать сегодняшний день',
    storeKey: 'highlightToday',
  },
  {
    title: 'Сегодняшний день в начале',
    storeKey: 'setTodayStart',
  },
  {
    title: 'Развернуть сегодняшний день',
    storeKey: 'expandToday',
  },
  {
    title: 'Развернуть все дни',
    storeKey: 'expandAllDays',
  },
  {
    title: 'Скрыть доп. преподавателей',
    storeKey: 'hideAdditionalTeacher',
  },
];

export const DAY_LENGTH_INPUT_DATA: TOptions = [
  {
    value: 1,
    label: '1 день',
  },
  {
    value: 10,
    label: '10 дней',
  },
  {
    value: 20,
    label: '20 дней',
  },
  {
    value: 30,
    label: '30 дней',
  },
  {
    value: 1000,
    label: 'Всё расписание',
  },
];

export const SPECIALIZATION_INPUT_DATA: TOptions = [
  {
    value: 'ivt',
    label: 'ИВТ',
  },
  {
    value: 'itss',
    label: 'ИТСС',
  },
  {
    value: 'itss-ccck',
    label: 'ИТСС профиль СССК',
  },
  {
    value: 'itss-mts',
    label: 'ИТСС профиль МТС',
  },
  {
    value: 'itss-zccc',
    label: 'ИТСС профиль ЗССС',
  },
];

export const GROUP_INPUT_DATA: Record<string, TOptions> = {
  ivt: [
    {
      value: 'ДВ-11',
      label: 'ДВ-11',
    },
    {
      value: 'ДВ-12',
      label: 'ДВ-12',
    },
    {
      value: 'ДП-21',
      label: 'ДП-21',
    },
    {
      value: 'ДП-22',
      label: 'ДП-22',
    },
    {
      value: 'ДП-31',
      label: 'ДП-31',
    },
    {
      value: 'ДП-41',
      label: 'ДП-41',
    },
    {
      value: 'В-11',
      label: 'В-11',
    },
    {
      value: 'В-12',
      label: 'В-12',
    },
    {
      value: 'ПО-21',
      label: 'ПО-21',
    },
    {
      value: 'ПО-22',
      label: 'ПО-22',
    },
    {
      value: 'ПО-31',
      label: 'ПО-31',
    },
    {
      value: 'ПО-41',
      label: 'ПО-41',
    },
    {
      value: 'ПО-51',
      label: 'ПО-51',
    },
  ],
  itss: [
    {
      value: 'ДИ-11',
      label: 'ДИ-11',
    },
    {
      value: 'ДИ-12',
      label: 'ДИ-12',
    },
    {
      value: 'ДИ-13',
      label: 'ДИ-13',
    },
    {
      value: 'И-11',
      label: 'И-11',
    },
    {
      value: 'И-12',
      label: 'И-12',
    },
    {
      value: 'И-13',
      label: 'И-13',
    },
    {
      value: 'И-14',
      label: 'И-14',
    },
    {
      value: 'И-15',
      label: 'И-15',
    },
    {
      value: 'ОЗИ-11',
      label: 'ОЗИ-11',
    },
  ],
  'itss-ccck': [
    {
      value: 'ДС-21',
      label: 'ДС-21',
    },
    {
      value: 'ДС-41',
      label: 'ДС-41',
    },
    {
      value: 'С-21',
      label: 'С-21',
    },
    {
      value: 'KC-31',
      label: 'KC-31',
    },
    {
      value: 'C-31',
      label: 'C-31',
    },
    {
      value: 'KC-41',
      label: 'KC-41',
    },
    {
      value: 'C-51',
      label: 'C-51',
    },
  ],
  'itss-mts': [
    {
      value: 'М-51',
      label: 'М-51',
    },
    {
      value: 'ДМ-21',
      label: 'ДМ-21',
    },
  ],
  'itss-zccc': [
    {
      value: 'ДЗ-21',
      label: 'ДЗ-21',
    },
    {
      value: 'ДЗ-31',
      label: 'ДЗ-31',
    },
    {
      value: 'ДЗ-41',
      label: 'ДЗ-41',
    },
    {
      value: 'ЗС-21',
      label: 'ЗС-21',
    },
    {
      value: 'ЗС-22',
      label: 'ЗС-22',
    },
    {
      value: 'ЗС-31',
      label: 'ЗС-31',
    },
    {
      value: 'ЗС-32',
      label: 'ЗС-32',
    },
    {
      value: 'ЗС-41',
      label: 'ЗС-41',
    },
    {
      value: 'ЗС-42',
      label: 'ЗС-42',
    },
    {
      value: 'ЗС-51',
      label: 'ЗС-51',
    },
  ],
};
