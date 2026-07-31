export const siteTitle = 'parantaja.fi';

export const defaultDescription = 'parantaja.fi';

export interface NavigationItem {
	label: string;
	href: string;
	children?: NavigationItem[];
}

export const navigation: NavigationItem[] = [
	{
		href: '/pekka-ilmari',
		label: 'Pekka-Ilmari',
		children: [
			{ href: '/meista', label: 'Kuka minä olen?' },
			{ href: '/maailmankuva', label: 'Maailmankuvani' },
			{ href: '/sanottua', label: 'Minusta sanottua' },
		],
	},
	{
		href: '/palvelut',
		label: 'Palvelut',
		children: [
			{ href: '/hoidot', label: 'Ihmisten parantaminen' },
			{ href: '/mentorointi', label: 'Mentorointi' },
			{ href: '/yksinkertaistaminen', label: 'Yksinkertaistaminen' },
			{ href: '/rahoitus', label: 'Rahoitushakemukset' },
			{ href: '/tutkimus', label: 'Tutkimus' }
		],
	},
	{
		href: '/periaatteet',
		label: 'Hinnat ja periaatteet',
		children: [
			{ href: '/sopimusehdot', label: 'Sopimuksettomuus' },
			{ href: '/hinnasto', label: 'Hinnattomuus', },
			{ href: '/lisenssit', label: 'Avoimuus'},
			{ href: '/eettiset-periaatteet', label: 'Eettiset periaatteet' }
		]
	},
	{ href: '/yhteys', label: 'Yhteystiedot' },];
