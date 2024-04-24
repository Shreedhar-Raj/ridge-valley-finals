export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      comments: {
        Row: {
          commentid: string
          createdat: string | null
          createdby: string | null
          noteid: string | null
          text: string | null
          upvotes: number | null
        }
        Insert: {
          commentid?: string
          createdat?: string | null
          createdby?: string | null
          noteid?: string | null
          text?: string | null
          upvotes?: number | null
        }
        Update: {
          commentid?: string
          createdat?: string | null
          createdby?: string | null
          noteid?: string | null
          text?: string | null
          upvotes?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_createdby_fkey"
            columns: ["createdby"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["username"]
          },
          {
            foreignKeyName: "comments_noteid_fkey"
            columns: ["noteid"]
            isOneToOne: false
            referencedRelation: "forumnotes"
            referencedColumns: ["noteid"]
          }
        ]
      }
      events: {
        Row: {
          created_at: string | null
          details: string | null
          event_id: string
          subject: string | null
          title: string | null
          topic_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          details?: string | null
          event_id?: string
          subject?: string | null
          title?: string | null
          topic_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          details?: string | null
          event_id?: string
          subject?: string | null
          title?: string | null
          topic_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "events_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "topic"
            referencedColumns: ["topic_id"]
          },
          {
            foreignKeyName: "events_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          }
        ]
      }
      forumnotes: {
        Row: {
          createdAt: string | null
          createdBy: string | null
          noteid: string
          title: string | null
        }
        Insert: {
          createdAt?: string | null
          createdBy?: string | null
          noteid?: string
          title?: string | null
        }
        Update: {
          createdAt?: string | null
          createdBy?: string | null
          noteid?: string
          title?: string | null
        }
        Relationships: []
      }
      question: {
        Row: {
          answer: string | null
          Chapter: string | null
          Correct_Option: string | null
          created_at: string | null
          Difficulty: string | null
          difficulty_level: number | null
          explanation: string | null
          Option_1: string | null
          Option_2: string | null
          Option_3: string | null
          Option_4: string | null
          options: string[] | null
          question: string | null
          Question: string | null
          question_id: string
          test_id: string | null
          topic_id: string | null
          type: string | null
          Unit: string
        }
        Insert: {
          answer?: string | null
          Chapter?: string | null
          Correct_Option?: string | null
          created_at?: string | null
          Difficulty?: string | null
          difficulty_level?: number | null
          explanation?: string | null
          Option_1?: string | null
          Option_2?: string | null
          Option_3?: string | null
          Option_4?: string | null
          options?: string[] | null
          question?: string | null
          Question?: string | null
          question_id?: string
          test_id?: string | null
          topic_id?: string | null
          type?: string | null
          Unit: string
        }
        Update: {
          answer?: string | null
          Chapter?: string | null
          Correct_Option?: string | null
          created_at?: string | null
          Difficulty?: string | null
          difficulty_level?: number | null
          explanation?: string | null
          Option_1?: string | null
          Option_2?: string | null
          Option_3?: string | null
          Option_4?: string | null
          options?: string[] | null
          question?: string | null
          Question?: string | null
          question_id?: string
          test_id?: string | null
          topic_id?: string | null
          type?: string | null
          Unit?: string
        }
        Relationships: [
          {
            foreignKeyName: "question_test_id_fkey"
            columns: ["test_id"]
            isOneToOne: false
            referencedRelation: "tests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "question_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "topic"
            referencedColumns: ["topic_id"]
          }
        ]
      }
      questionCs: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      students: {
        Row: {
          auth_id: string | null
          board: string | null
          created_at: string | null
          email: string | null
          id: string
          interests: string[] | null
          looking: boolean | null
          plan: number | null
          subjects: string[] | null
          username: string | null
          xp: number
        }
        Insert: {
          auth_id?: string | null
          board?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          interests?: string[] | null
          looking?: boolean | null
          plan?: number | null
          subjects?: string[] | null
          username?: string | null
          xp?: number
        }
        Update: {
          auth_id?: string | null
          board?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          interests?: string[] | null
          looking?: boolean | null
          plan?: number | null
          subjects?: string[] | null
          username?: string | null
          xp?: number
        }
        Relationships: [
          {
            foreignKeyName: "students_auth_id_fkey"
            columns: ["auth_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      tests: {
        Row: {
          board: string | null
          created_at: string
          difficulty_level: number | null
          id: string
          questions: number | null
          score: number | null
          student_id: string | null
          subject: string | null
          time: number | null
          total: number | null
        }
        Insert: {
          board?: string | null
          created_at?: string
          difficulty_level?: number | null
          id?: string
          questions?: number | null
          score?: number | null
          student_id?: string | null
          subject?: string | null
          time?: number | null
          total?: number | null
        }
        Update: {
          board?: string | null
          created_at?: string
          difficulty_level?: number | null
          id?: string
          questions?: number | null
          score?: number | null
          student_id?: string | null
          subject?: string | null
          time?: number | null
          total?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tests_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          }
        ]
      }
      topic: {
        Row: {
          board: string | null
          created_at: string | null
          strength_score: number | null
          student_id: string | null
          topic_id: string
          topic_name: string | null
        }
        Insert: {
          board?: string | null
          created_at?: string | null
          strength_score?: number | null
          student_id?: string | null
          topic_id?: string
          topic_name?: string | null
        }
        Update: {
          board?: string | null
          created_at?: string | null
          strength_score?: number | null
          student_id?: string | null
          topic_id?: string
          topic_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "topic_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      board: "igcse" | "icse" | "cbse" | "ib"
      plan: "1" | "2" | "3"
      Topic: "name" | "weightage" | "level"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
