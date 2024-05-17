// I18n import
import {useTranslations} from 'next-intl';
// headlessUi Import
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
// react import hook
import {Fragment, useState} from 'react';

export function Search() {
  return (
    <main className="lg:relative" dir="rtl">
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
      <div className="  pt-16 pb-20 lg:py-48 flex">
        <section className="max-w-7xl  w-full mx-auto px-4 align-middle">
          <div className="px-4  sm:px-8 xl:pr-16">
            <h1 className=" animate-blob text-4xl  tracking-tight text-center font-extrabold text-gray-800 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline selection:text-blue-300  ">
                الخدام الي تستحقو في مرمتك
              </span>
              <span className="block text-blue-600 xl:inline  ">
                <strong>موجود عندنا 🤭😅</strong>
              </span>
            </h1>

            <div className="flex md:flex-row flex-col space-y-5 md:space-y-0 items-center border-white border-[10px] shadow-xl bg-white rounded-xl h-auto md:h-[70px] mt-5 justify-between ">
              <div className="md:basis-1/4 w-full ">
                <JobList />
              </div>
              <div className="md:basis-1/4 w-full">
                <CountryList />
              </div>
              <div className=" md:basis-1/4 w-full">
                <TownList />
              </div>
              <div className="relative md:basis-1/4 w-full ">
                <button
                  className="w-[150px] bg-blue-400 
          h-[50px] my-3 flex items-center justify-center rounded-xl 
          cursor-pointer relative overflow-hidden transition-all duration-500 
          ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute 
          before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r
           before:from-[#00509b] before:to-[rgb(105,126,184)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
                  type="button"
                >
                  بحث
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
function JobList() {
  const t = useTranslations('JOB_CATEGORIES');

  const people = [
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
    {id: 15, name: t('15')}
  ];
  const [selected, setSelected] = useState(people[3]);
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
                <ListboxOptions className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {people.map((person) => (
                    <ListboxOption
                      key={person.id}
                      className={({focus}) =>
                        clsx(
                          focus ? 'text-white bg-blue-600' : 'text-gray-900',
                          'cursor-default text-lg md:text-start text-center pr-6 select-none relative py-2'
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
  const people = [
    {id: 1, name: 'اريانة'},
    {id: 2, name: 'باحة'},
    {id: 3, name: 'بن عروس'},
    {id: 4, name: 'بنزرت'},
    {id: 5, name: 'قابس'},
    {id: 6, name: 'قفصة '},
    {id: 7, name: 'قبلي'},
    {id: 8, name: 'جندوبة'},
    {id: 9, name: 'القيروان'},
    {id: 10, name: 'القصرين'},
    {id: 11, name: 'المهدية'},
    {id: 12, name: 'منوبة'},
    {id: 13, name: 'منستير'},
    {id: 14, name: 'مدنين'},
    {id: 15, name: 'نابل'},
    {id: 16, name: 'صفاقس'},
    {id: 17, name: 'سوسة'},
    {id: 18, name: ' سليانة'},
    {id: 19, name: 'سيدي بوزيد'},
    {id: 20, name: 'توزر'},
    {id: 21, name: 'تطاوين'}
  ];
  const [selected, setSelected] = useState(people[3]);
  return (
    <Field>
      <Label className=" text-xl md:lg block text-center md:text-right pr-12 font-medium text-gray-400">
        الولاية
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
                <ListboxOptions className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {people.map((person) => (
                    <ListboxOption
                      key={person.id}
                      className={({focus}) =>
                        clsx(
                          focus ? 'text-white bg-blue-600' : 'text-gray-900',
                          'cursor-default text-lg md:text-start text-center pr-6 select-none relative py-2'
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
function TownList() {
  const people = [
    {id: 1, name: 'اريانة'},
    {id: 2, name: 'باحة'},
    {id: 3, name: 'بن عروس'},
    {id: 4, name: 'بنزرت'},
    {id: 5, name: 'قابس'},
    {id: 6, name: 'قفصة '},
    {id: 7, name: 'قبلي'},
    {id: 8, name: 'جندوبة'},
    {id: 9, name: 'القيروان'},
    {id: 10, name: 'القصرين'},
    {id: 11, name: 'المهدية'},
    {id: 12, name: 'منوبة'},
    {id: 13, name: 'منستير'},
    {id: 14, name: 'مدنين'},
    {id: 15, name: 'نابل'},
    {id: 16, name: 'صفاقس'},
    {id: 17, name: 'سوسة'},
    {id: 18, name: ' سليانة'},
    {id: 19, name: 'سيدي بوزيد'},
    {id: 20, name: 'توزر'},
    {id: 21, name: 'تطاوين'}
  ];
  const [selected, setSelected] = useState(people[3]);
  return (
    <Field>
      <Label className=" text-xl md:lg block text-center md:text-right pr-12 font-medium text-gray-400">
        المعتمدية
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
                <ListboxOptions className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {people.map((person) => (
                    <ListboxOption
                      key={person.id}
                      className={({focus}) =>
                        clsx(
                          focus ? 'text-white bg-blue-600' : 'text-gray-900',
                          'cursor-default text-lg md:text-start text-center pr-6 select-none relative py-2'
                        )
                      }
                      value={person}
                    >
                      {({focus}) => (
                        <>
                          <span
                            className={clsx(
                              selected ? 'font-semibold' : 'font-normal',
                              'block truncate'
                            )}
                          >
                            {person.name}
                          </span>

                          {selected ? (
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
