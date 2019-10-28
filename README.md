# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|tweets|string|null: false|
|password|string|null: false|
|nickname|string|null: false|
### Association
- be longs to :tweet
- has_many :comments
## tweetsテーブル
|Column|Type|Options|
|------|----|-------|
|image|text||
|text|text||
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- has_many :comments
## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user
## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user
