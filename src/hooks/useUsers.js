import { useQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';
import usersSeed from '../../assets/digitalflow_users.json';
import { getLocalUsers } from '../storage/localUsers';



function toRow(u) {
const fullName = `${u?.name?.first ?? ''} ${u?.name?.middle ?? ''} ${u?.name?.last ?? ''}`.replace(/\s+/g,' ').trim();
return {
        uuid: u?.uuid ?? u?.objectId ?? String(Math.random()),
        fullName,
        email: Array.isArray(u?.emails) ? u.emails[0] : '',
        country: u?.location?.country ?? '',
        city: u?.location?.city ?? '',
        street: u?.location?.street ?? '',
        phoneNumber: u?.phoneNumber ?? '',
        jobTitle: u?.job?.title ?? '',
        jobCompany: u?.job?.company ?? '',
        raw: u,
    };
}

async function fetchJsonUsers() {
    return new Promise((resolve) => {
    setTimeout(() => {
    const resultArray = usersSeed?.result ?? [];
    resolve(resultArray.map(toRow));
    }, 150); 
    });
}


export function useUsers() {
    const { data: jsonUsers = [], isLoading, error, refetch } = useQuery({
    queryKey: ['jsonUsers'],
    queryFn: fetchJsonUsers,
    staleTime: 5 * 60 * 1000,
});

    const [localUsers, setLocalUsers] = useState([]);
    async function refreshLocal() {
    const list = await getLocalUsers();
    setLocalUsers(list.map(toRow));
    }
    useEffect(() => {
    refreshLocal();
    }, []);

    const allUsers = useMemo(() => {
    const merged = [...localUsers, ...jsonUsers];
    const seen = new Set();
    return merged.filter((u) => {
    const key = `${u.uuid}|${u.email}|${u.fullName}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
    });
    }, [jsonUsers, localUsers]);


    return { allUsers, isLoading, error, refetch, refreshLocal };
}