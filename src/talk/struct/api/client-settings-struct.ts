import { StructBase } from "../struct-base";
import { JsonUtil } from "../../../util/json-util";
import { Long } from "bson";

/*
 * Created on Sun Nov 03 2019
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

export class ClientSettingsStruct implements StructBase {

    constructor(
        public AccountId: number = 0,
        public AllowPay: boolean = false,
        public AllowStory: boolean = false,
        public AllowStoryPost: boolean = false,
        public BackgroundImageURL: string = '',
        public OriginalBackgroundImageURL: string = '',
        public ProfileImageURL: string = '',
        public FullProfileImageURL: string = '',
        public OriginalProfileImageURL: string = '',
        public StatusMessage: string = '',
        public StoryURL: string = '',
        public Suspended: boolean = false,
        public UserId: Long = Long.ZERO
    ) {

    }

    fromJson(rawData: any): void {
        this.AccountId = rawData['accountId'];
        this.AllowPay = rawData['allowPay'];
        this.AllowStory = rawData['allowStory'];
        this.AllowStoryPost = rawData['allowStoryPost'];
        this.BackgroundImageURL = rawData['backgroundImageUrl'];
        this.OriginalBackgroundImageURL = rawData['originalBackgroundImageUrl'];
        this.ProfileImageURL = rawData['profileImageUrl'];
        this.FullProfileImageURL = rawData['fullProfileImageUrl'];
        this.OriginalProfileImageURL = rawData['originalProfileImageUrl'];
        this.StatusMessage = rawData['statusMessage'];
        this.StoryURL = rawData['storyWebUrl'];
        this.Suspended = rawData['suspended'];
        this.UserId = JsonUtil.readLong(rawData['userId']);
    }
    
    toJson() {
        return {
            'accountId': this.AccountId,
            'allowPay': this.AllowPay,
            'allowStory': this.AllowStory,
            'allowStoryPost': this.AllowStoryPost,
            'backgroundImageUrl': this.BackgroundImageURL,
            'originalBackgroundImageUrl': this.OriginalBackgroundImageURL,
            'profileImageUrl': this.ProfileImageURL,
            'fullProfileImageUrl': this.FullProfileImageURL,
            'originalProfileImageUrl': this.OriginalProfileImageURL,
            'statusMessage': this.StatusMessage,
            'storyWebUrl': this.StoryURL,
            'suspended': this.Suspended,
            'userId': this.UserId
        };
    }


}