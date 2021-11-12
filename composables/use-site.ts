export function useSite() {
  return {
    name: 'Novweb',
    title: 'Front-end ',
    titleStrings: ['Developer.', 'Adept.', 'Mate.'] as string[],
    subTitle: `If you'd like to make an enquiry, please feel free to get in touch, and I will respond as soon as possible.`,
    contacts: [
      {
        title: 'Tel',
        value: '+7 (937)-966-3540',
        type: 'tel',
      },
      {
        title: 'Email',
        value: 'novweb@icloud.com',
        type: 'email',
      },
      {
        title: 'Place',
        value: 'Saratov, Russia',
        type: 'text',
      },
    ] as { title: string; value: string; type: string }[],
  }
}
