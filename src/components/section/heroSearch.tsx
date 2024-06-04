// I18n import
import {
  Transition,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Label,
  Field
} from '@headlessui/react';
import {CheckIcon, ChevronUpIcon} from '@heroicons/react/24/outline';
import {ChevronDownIcon} from '@heroicons/react/24/solid';
import clsx from 'clsx';
// headlessUi Import
import {usePathname} from 'next/navigation';
import {useTranslations} from 'next-intl';
// react import hook
import {Fragment, useEffect, useState} from 'react';

export function Search() {
  const [data, setData] = useState<number>(1);
  const t = useTranslations('HeroSearch');
  const pathname = usePathname();
  function handleDataChange(newData: number) {
    setData(newData);
  }
  return (
    <main className="lg:relative">
      <div className="area h-[400px]">
        <ul className="circles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
      <div className="pt-16 pb-20 lg:py-48 flex">
        <section className="max-w-7xl  w-full mx-auto px-4 align-middle">
          <div className="px-4  sm:px-8 xl:pr-16">
            <h1 className=" animate-blob text-4xl  tracking-tight text-center font-extrabold text-gray-800 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline selection:text-blue-300  ">
                {t('title1')}
              </span>
              <span className="block text-sky-600 xl:inline  ">
                <strong> {t('title2')} </strong>
              </span>
            </h1>

            <div
              className={clsx(
                'flex md:flex-row flex-col space-y-5 md:space-y-0 items-center border-white border-[10px] shadow-xl bg-white rounded-xl h-auto md:h-[70px] mt-5 justify-between',
                {
                  'md:flex-row-reverse ': pathname === '/ar'
                }
              )}
            >
              <div className="md:basis-1/4 w-full ">
                <JobList onDataChange={handleDataChange} />
              </div>
              <div className="md:basis-1/4 w-full">
                <Espically data={data} />
              </div>
              <div className=" md:basis-1/4 w-full">
                <CountryList />
              </div>
              <div className="relative md:basis-1/4 w-full ">
                <button
                  className="w-[150px] bg-sky-400 m-auto
          h-[50px] my-3 flex items-center justify-center rounded-xl 
          cursor-pointer relative overflow-hidden transition-all duration-500 
          ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute 
          before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r
           before:from-[#00509b] before:to-[rgb(105,126,184)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
                  type="button"
                >
                  {t('search')}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
// type for Job Components
interface Propes {
  onDataChange(id: number): void;
}
function JobList({onDataChange}: Propes) {
  const t = useTranslations('JOB_CATEGORIES');
  const JOB_CATEGORIES = [
    {id: 1, name: t('1')},
    {id: 2, name: t('2')},
    {id: 3, name: t('3')},
    {id: 4, name: t('4')},
    {id: 5, name: t('5')},
    {id: 6, name: t('6')},
    {id: 7, name: t('7')},
    {id: 8, name: t('8')},
    {id: 9, name: t('9')},
    {id: 10, name: t('10')},
    {id: 11, name: t('11')},
    {id: 12, name: t('12')},
    {id: 13, name: t('13')},
    {id: 14, name: t('14')}
  ];

  const [selected, setSelected] = useState(JOB_CATEGORIES[1]);
  useEffect(() => {
    onDataChange(selected.id);
  }, [onDataChange, selected]);

  return (
    <Field>
      <Label className=" text-xl md:lg block text-center md:text-right pr-12 font-medium text-gray-400">
        {t('title')}
      </Label>
      <Listbox onChange={setSelected} value={selected}>
        {({open}) => (
          <>
            <div className="mt-1 relative">
              <ListboxButton className="bg-white relative w-full border-white pr-12  md:text-right cursor-default sm:text-sm">
                <span className="block truncate text-lg font-medium text-gray-800">
                  {selected.name}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  {open ? (
                    <ChevronUpIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    />
                  ) : (
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    />
                  )}
                </span>
              </ListboxButton>

              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                show={open}
              >
                <ListboxOptions className="absolute z-40 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {JOB_CATEGORIES.map((person) => (
                    <ListboxOption
                      key={person.id}
                      className={({focus}) =>
                        clsx(
                          focus ? 'text-white bg-sky-600' : 'text-gray-900',
                          'cursor-default text-lg md:text-center pr-6 select-none relative py-2'
                        )
                      }
                      value={person}
                    >
                      {({focus}) => (
                        <>
                          <span
                            className={clsx(
                              focus ? 'font-semibold' : 'font-normal',
                              'block truncate'
                            )}
                          >
                            {person.name}
                          </span>

                          {focus ? (
                            <Fragment>
                              <CheckIcon
                                aria-hidden="true"
                                className="h-5 w-5"
                              />

                              <span
                                className={clsx(
                                  focus ? 'text-white' : 'text-blue-600',
                                  'absolute inset-y-0 right-0 flex items-center pr-4'
                                )}
                              />
                            </Fragment>
                          ) : null}
                        </>
                      )}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </Field>
  );
}
function CountryList() {
  const t = useTranslations('Gouvernements_tunisiens');

  const Gouvernements_tunisiens = [
    {id: 1, name: t('1')},
    {id: 2, name: t('2')},
    {id: 3, name: t('3')},
    {id: 4, name: t('4')},
    {id: 5, name: t('5')},
    {id: 6, name: t('6')},
    {id: 7, name: t('7')},
    {id: 8, name: t('8')},
    {id: 9, name: t('9')},
    {id: 10, name: t('10')},
    {id: 11, name: t('11')},
    {id: 12, name: t('12')},
    {id: 13, name: t('13')},
    {id: 14, name: t('14')},
    {id: 15, name: t('15')},
    {id: 16, name: t('16')},
    {id: 17, name: t('17')},
    {id: 18, name: t('18')},
    {id: 19, name: t('19')},
    {id: 20, name: t('20')},
    {id: 21, name: t('21')},
    {id: 22, name: t('22')},
    {id: 23, name: t('23')},
    {id: 24, name: t('24')}
  ];
  const [selected, setSelected] = useState(Gouvernements_tunisiens[3]);
  return (
    <Field>
      <Label className=" text-xl md:lg block text-center md:text-right pr-12 font-medium text-gray-400">
        {t('title')}
      </Label>
      <Listbox onChange={setSelected} value={selected}>
        {({open}) => (
          <>
            <div className="mt-1 relative">
              <ListboxButton className="bg-white relative w-full border-white pr-12  md:text-right cursor-default sm:text-sm">
                <span className="block truncate text-lg font-medium text-gray-800">
                  {selected.name}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  {open ? (
                    <ChevronUpIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    />
                  ) : (
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    />
                  )}
                </span>
              </ListboxButton>

              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                show={open}
              >
                <ListboxOptions className="absolute z-20 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {Gouvernements_tunisiens.map((person) => (
                    <ListboxOption
                      key={person.id}
                      className={({focus}) =>
                        clsx(
                          focus ? 'text-white bg-sky-600' : 'text-gray-900',
                          'cursor-default text-lg  text-center pr-6 select-none relative py-2'
                        )
                      }
                      value={person}
                    >
                      {({focus}) => (
                        <>
                          <span
                            className={clsx(
                              focus ? 'font-semibold' : 'font-normal',
                              'block truncate'
                            )}
                          >
                            {person.name}
                          </span>

                          {focus ? (
                            <Fragment>
                              <CheckIcon
                                aria-hidden="true"
                                className="h-5 w-5"
                              />

                              <span
                                className={clsx(
                                  focus ? 'text-white' : 'text-sky-600',
                                  'absolute inset-y-0 right-0 flex items-center pr-4'
                                )}
                              />
                            </Fragment>
                          ) : null}
                        </>
                      )}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </Field>
  );
}
interface Props {
  data: number;
}

function Espically({data}: Props) {
  const tr = useTranslations('JOB_Sub_CATEGORIES');
  const Domaine_Espicality = [
    {
      id: 1,
      subDomaine: [
        {id: 1, name: tr('1')},
        {id: 2, name: tr('2')},
        {id: 3, name: tr('3')},
        {id: 4, name: tr('4')},
        {id: 5, name: tr('5')},
        {id: 6, name: tr('6')},
        {id: 7, name: tr('7')},
        {id: 8, name: tr('8')},
        {id: 9, name: tr('9')}
      ]
    },
    {
      id: 2,
      subDomaine: [
        {id: 1, name: tr('10')},
        {id: 2, name: tr('11')},
        {id: 3, name: tr('12')},
        {id: 4, name: tr('13')},
        {id: 5, name: tr('14')}
      ]
    },
    {
      id: 3,
      subDomaine: [
        {id: 1, name: tr('16')},
        {id: 2, name: tr('17')},
        {id: 3, name: tr('18')}
      ]
    },
    {
      id: 4,
      subDomaine: [
        {id: 1, name: tr('19')},
        {id: 2, name: tr('20')},
        {id: 3, name: tr('21')},
        {id: 4, name: tr('22')},
        {id: 5, name: tr('23')},
        {id: 6, name: tr('24')}
      ]
    },
    {
      id: 5,
      subDomaine: [
        {id: 1, name: tr('25')},
        {id: 2, name: tr('26')},
        {id: 3, name: tr('27')},
        {id: 4, name: tr('28')},
        {id: 5, name: tr('29')},
        {id: 6, name: tr('30')}
      ]
    },
    {
      id: 6,
      subDomaine: [
        {id: 1, name: tr('31')},
        {id: 2, name: tr('32')},
        {id: 3, name: tr('33')},
        {id: 4, name: tr('34')},
        {id: 5, name: tr('35')}
      ]
    },
    {
      id: 7,
      subDomaine: [
        {id: 1, name: tr('36')},
        {id: 2, name: tr('37')},
        {id: 3, name: tr('38')},
        {id: 4, name: tr('39')},
        {id: 5, name: tr('40')}
      ]
    },
    {
      id: 8,
      subDomaine: [
        {id: 1, name: tr('41')},
        {id: 2, name: tr('42')},
        {id: 3, name: tr('43')},
        {id: 4, name: tr('44')},
        {id: 5, name: tr('45')},
        {id: 6, name: tr('46')},
        {id: 7, name: tr('47')}
      ]
    },
    {
      id: 9,
      subDomaine: [
        {id: 1, name: tr('48')},
        {id: 2, name: tr('49')},
        {id: 3, name: tr('50')}
      ]
    },
    {
      id: 10,
      subDomaine: [
        {id: 1, name: tr('48')},
        {id: 2, name: tr('49')},
        {id: 3, name: tr('50')}
      ]
    },
    {
      id: 11,
      subDomaine: [
        {id: 1, name: tr('51')},
        {id: 2, name: tr('52')},
        {id: 3, name: tr('53')},
        {id: 4, name: tr('54')},
        {id: 5, name: tr('55')}
      ]
    },
    {
      id: 12,
      subDomaine: [
        {id: 1, name: tr('56')},
        {id: 2, name: tr('57')},
        {id: 3, name: tr('58')},
        {id: 4, name: tr('59')},
        {id: 5, name: tr('60')},
        {id: 5, name: tr('61')},
        {id: 5, name: tr('62')},
        {id: 5, name: tr('63')},
        {id: 5, name: tr('64')}
      ]
    },
    {
      id: 13,
      subDomaine: [
        {id: 1, name: tr('65')},
        {id: 2, name: tr('66')},
        {id: 3, name: tr('67')},
        {id: 4, name: tr('68')},
        {id: 5, name: tr('69')},
        {id: 6, name: tr('70')}
      ]
    },
    {
      id: 14,
      subDomaine: [
        {id: 1, name: tr('71')},
        {id: 2, name: tr('72')},
        {id: 3, name: tr('73')},
        {id: 4, name: tr('74')},
        {id: 5, name: tr('75')},
        {id: 6, name: tr('76')},
        {id: 7, name: tr('77')},
        {id: 8, name: tr('78')}
      ]
    }
  ];
  const domaine = Domaine_Espicality.find((d) => d.id === data);

  return (
    <Field>
      <Label className=" text-xl md:lg block text-center md:text-right pr-12 font-medium text-gray-400">
        {tr('title')}
      </Label>
      <Listbox>
        {({open}) => (
          <>
            <div className="mt-1 relative">
              <ListboxButton className="bg-white relative w-full border-white pr-12  md:text-right cursor-default sm:text-sm">
                <span className="block truncate text-lg font-medium text-gray-800">
                  {domaine?.subDomaine[0].name}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  {open ? (
                    <ChevronUpIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    />
                  ) : (
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    />
                  )}
                </span>
              </ListboxButton>

              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                show={open}
              >
                <ListboxOptions className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {domaine?.subDomaine.map((person) => (
                    <ListboxOption
                      key={person.id}
                      className={({focus}) =>
                        clsx(
                          focus ? 'text-white bg-sky-600' : 'text-gray-900',
                          'cursor-default text-lg text-center pr-6 select-none relative py-2'
                        )
                      }
                      value={person.id}
                    >
                      {({focus}) => (
                        <>
                          <span
                            className={clsx(
                              focus ? 'font-semibold' : 'font-normal',
                              'block truncate'
                            )}
                          >
                            {person.name}
                          </span>

                          {focus ? (
                            <Fragment>
                              <CheckIcon
                                aria-hidden="true"
                                className="h-5 w-5"
                              />

                              <span
                                className={clsx(
                                  focus ? 'text-white' : 'text-sky-600',
                                  'absolute inset-y-0 right-0 flex items-center pr-4'
                                )}
                              />
                            </Fragment>
                          ) : null}
                        </>
                      )}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </Field>
  );
}
