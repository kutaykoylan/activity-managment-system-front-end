import { BASE_URL } from "../config";
import axios from "axios";

export const getNumberOfPages = async (pageSize) => {
    try {
        //activity/numberOfPages?pageSize=12
        const response = await axios.get(BASE_URL + 'activity/numberOfPages?pageSize='+pageSize);
        return response;
    } catch (error) {
        return 0;
    }

}

export const getPageActivities = async (pageNumber,pageSize) => {
    try {
        const response = await axios.get(BASE_URL+ 'activity/pages/'+pageNumber+'?numberOfActivities='+pageSize);
        return response;
    } catch (error) {
        return null;
    }
}
export const getAllActivities = async () => {
    try {
        const response = await axios.get(BASE_URL+ 'activity/allActivities');
        return response;
    } catch (error) {
        return null;
    }
}

export const getActivityWithID = async (id) => {
    try {
        const response = await axios.get(BASE_URL+ 'activity/allActivities/'+id);
        return response;
    } catch (error) {
        return null;
    }
}
export const addActivity = async (activity) => {
    console.log(activity)
    const formData={
        id:0,
        title:activity.title,
        details:activity.details,
        locationLat:activity.locationLat,
        locationLng:activity.locationLng,
        startDate:activity.startDate,
        endDate:activity.endDate
    };
    try {
        const response = await axios.post(BASE_URL+ 'activity/add',formData);
        return response;
        console.log(response)
    } catch (error) {
        console.log(error)
        return null;
    }
}
export const updateActivity = async (activity) => {
    try {
        const response = await axios.patch(BASE_URL+ 'activity/update',activity);
        return response;
    } catch (error) {
        return null;
    }
}
export const deleteActivity = async (activity) => {
    const form={
        data:activity
    }
    console.log(activity)
    try {
        const response = await axios.delete(BASE_URL+ 'activity/delete',form);
        return response;
    } catch (error) {
        return null;
    }
}